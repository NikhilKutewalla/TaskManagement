import * as tslib_1 from "tslib";
import { ConfigActions } from './config.actions';
var INITIAL_STATE = {
    headerTheme: '',
    sidebarTheme: '',
};
export function ConfigReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case ConfigActions.CONFIG_GET:
            return Object.assign({}, state);
        case ConfigActions.CONFIG_UPDATE:
            return Object.assign({}, state, tslib_1.__assign({}, action.payload));
        default:
            return state;
    }
}
//# sourceMappingURL=config.reducer.js.map