import {
  KEYS,
  CANVAS_SEARCH_TAB,
  CLASSES,
  DEFAULT_SIDEBAR,
} from "@excalidraw/common";

import { CaptureUpdateAction } from "@excalidraw/element";

import { searchIcon } from "../components/icons";
import { replaceModeAtom } from "../components/SearchMenu";
import { editorJotaiStore } from "../editor-jotai";

import { register } from "./register";

import type { AppState } from "../types";

// Track which key triggered the action so perform() can set replace mode
let lastTriggerKey: string | null = null;

export const actionToggleSearchMenu = register({
  name: "searchMenu",
  icon: searchIcon,
  keywords: ["search", "find", "replace"],
  label: "search.title",
  viewMode: true,
  trackEvent: {
    category: "search_menu",
    action: "toggle",
    predicate: (appState) => appState.gridModeEnabled,
  },
  perform(elements, appState, _, app) {
    if (appState.openDialog) {
      return false;
    }

    const isReplaceShortcut = lastTriggerKey === KEYS.H;
    lastTriggerKey = null;

    if (
      appState.openSidebar?.name === DEFAULT_SIDEBAR.name &&
      appState.openSidebar.tab === CANVAS_SEARCH_TAB
    ) {
      if (isReplaceShortcut) {
        editorJotaiStore.set(replaceModeAtom, true);
      }

      const searchInput =
        app.excalidrawContainerValue.container?.querySelector<HTMLInputElement>(
          `.${CLASSES.SEARCH_MENU_INPUT_WRAPPER} input`,
        );

      searchInput?.focus();
      searchInput?.select();
      return false;
    }

    if (isReplaceShortcut) {
      editorJotaiStore.set(replaceModeAtom, true);
    }

    return {
      appState: {
        ...appState,
        openSidebar: { name: DEFAULT_SIDEBAR.name, tab: CANVAS_SEARCH_TAB },
        openDialog: null,
      },
      captureUpdate: CaptureUpdateAction.EVENTUALLY,
    };
  },
  checked: (appState: AppState) => appState.gridModeEnabled,
  predicate: (element, appState, props) => {
    return props.gridModeEnabled === undefined;
  },
  keyTest: (event) => {
    if (
      event[KEYS.CTRL_OR_CMD] &&
      (event.key === KEYS.F || event.key === KEYS.H)
    ) {
      lastTriggerKey = event.key;
      return true;
    }
    return false;
  },
});
