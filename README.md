# cqhttp-ts
ts搭建的go-cqhttp机器人开发框架

## 响应流程
1. 接受通用上报
2. 判断通用上报类型
3. 在通用消息/事件...上报上绑定所需函数(消息上报内的reply等)
4. 将绑定后的通用消息细分为不同类别
5. 将细分后的不同类别的上报传到handler中处理。然后可以拓展mod
	* 处理器中定义容器存放不同的mod，每次消息都要经过每个mod的判断。如果mod中的规则匹配成功，则执行mod中的流程。

## *实现拓展
> 系统导出了类似于useMessageMod和useNoticeMod形式的函数。以群消息为例
1. 在任何地方使用useMod.useMessageMod()函数
2. 这个函数需要提供一个对应的mod类型，你可以编写一个函数来实现对应的函数（FriendMessageModType）。
3. FriendMessageModType要求强制传入一个**number数组**来实现白名单（具体是否实现了白名单，根据modType中的字段来查看）。还需要实现**handler**来作为处理的入口，实现**name**来进行统一管理，实现type来作为内部识别的标志
4. 编写handler函数。通过调用框架导出的api来实现主动操作，或者调用msg上绑定的reply快速回复消息。

```
linkServer(8080);

useMod.useMessageMod([test([10086])]);
//在websocket 8080端口运行了go-cqhttp的情况下，只需要这2步即可实现一个mod，这个mod只会对10086的qq或者群号来响应。
```


## 实现mod接口
>  从ModTypes调用
> 具体用处见 [cqhttp帮助中心](https://docs.go-cqhttp.org/api/#%E5%9F%BA%E7%A1%80%E4%BC%A0%E8%BE%93)
* FriendMessageModType 朋友消息拓展模块
* GroupMessageModType 群消息拓展模块
* ClientStatusUpdateModType
* FriendAddModType
* FriendRecallModType
* FriendPokeModType
* GroupAdminUpdateModType
* GroupBanModType
* GroupCardUpdateModType
* ,GroupEssenceModType
* GroupHonorUpdateModType
* GroupLuckyKingModType
* GroupMemberDecreaseModType
* GroupMemberIncreaseModType
* GroupRecallModType
* GroupPokeModType
* GroupUploadFileModType
* ReceiveOfflineType


## 实现api
* CqApi.sendPrivateMessage 发送私聊消息