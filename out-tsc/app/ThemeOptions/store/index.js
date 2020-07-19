import { combineReducers } from 'redux';
import { ConfigReducer } from './config.reducer';
var ArchitectUIState = /** @class */ (function () {
    function ArchitectUIState() {
    }
    return ArchitectUIState;
}());
export { ArchitectUIState };
;
export var rootReducer = combineReducers({
    config: ConfigReducer,
});
//# sourceMappingURL=index.js.map