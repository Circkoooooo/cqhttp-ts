export namespace MessageSender {
	type BaseSender = {
		user_id: number;
		nickname: string;
		sex: 'male' | 'female' | unknown;
		age: number;
	};
	export type Friend = BaseSender & {};
	export type Group = BaseSender & {
		card: string;
		area: string;
		level: string;
		role: 'owner' | 'admin' | 'member';
		title: string;
	};
}

export type MessageSenderType =
	| 'friend'
	| 'group'
	| 'group_self'
	| 'normal'
	| 'anonymous'
	| 'notice';
