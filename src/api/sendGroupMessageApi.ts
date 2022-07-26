import { CqWebsocket } from '../server/linkServer';
import {
	SendGroupMessageApiResponseType,
	SendGroupMessageApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SendGroupMessageApiType
): Promise<SendGroupMessageApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('send_group_msg', param));
};
