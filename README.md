## OKEX专场 学习记录

### Week 1 合约编写和部署

**合约：WavePortal**

1. 可以调用```wave```向合约打招呼
2. 打招呼的人有50%的几率获得0.0001eth
3. 30秒内只能打招呼一次
4. 如果有人向合约打招呼，那么会通过```emit```通知Dapp更新数据

Rinkeby合约地址：0x49ee02Bbf503892BE04145927c460765f69E0b43

[Rinkeby官方地址](https://www.rinkeby.io/#explorer)

合约截图：
[![bkXgBT.png](https://s4.ax1x.com/2022/02/25/bkXgBT.png)](https://imgtu.com/i/bkXgBT)

### Week 2 SOLIDITY

#### W2_1

* 编写⼀个Bank合约
* 通过 Metamask 向Bank合约转账ETH
* 在Bank合约记录每个地址转账⾦额
* 编写 Bank合约withdraw(), 实现提取出所有的

Rinkeby合约地址：0xD0480235dC5E3993702791499d637B13dF49412C

#### W2_2

* 编写合约Score，⽤于记录学⽣（地址）分数：
* 仅有⽼师（⽤modifier权限控制）可以添加和修改学⽣分数
* 分数不可以⼤于 100；
* 编写合约 Teacher 作为⽼师，通过 IScore 接⼝调⽤修改学⽣分数。

Rinkeby合约地址：0x21AeA93F9C95Db7b65584877A2023522590A8cAD

### Week 3 智能合约及DAPP开发

### Week 4 DEX 分析

### Week 5 抵押借贷及衍⽣品协议

### Week 6 稳定币及 DAO
