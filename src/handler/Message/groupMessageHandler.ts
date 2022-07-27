import { GroupMessageModType } from '../../types/Mod/MessageModType';
import { GroupMessageType } from '../../types/PostMessageType/GroupMessageType';

/**
 * mod容器
 */
export const groupMessageMods: GroupMessageModType[] = [];

export default (msg: GroupMessageType) => {
	groupMessageMods.forEach((item) => {
		if (item.whiteList.includes(msg.group_id)) {
			item.handler(msg);
		}
	});
};
