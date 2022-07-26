import { MessagePost } from '../GeneralPostType';
import { MessageSender } from '../MessageType/MessageSenderType';

/**
 * https://docs.go-cqhttp.org/api/#%E5%8F%91%E9%80%81%E7%A7%81%E8%81%8A%E6%B6%88%E6%81%AF
 */
export type FriendMessageType = MessagePost & {
	/**
	 * 临时消息来源
	 */
	temp_source: number;
};
