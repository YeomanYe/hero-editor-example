import Vue from 'vue';
import Vuex, {Module} from 'vuex';
import userInfo, {State as UserInfoState} from './modules/user-info';
import heroes,{Hero} from './modules/heroes';
export {Hero} from './modules/heroes';
export {State as UserInfoState} from './modules/user-info';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userInfo,
        heroes
    }
});

export interface State {
    userInfo: UserInfoState;
    heroes:Array<Hero>;
}
