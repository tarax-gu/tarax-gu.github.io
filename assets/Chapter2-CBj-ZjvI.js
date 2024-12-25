import{_ as a,r as e,o as d,m as h,b as i,w as t,p,i as m,a as l,e as n}from"./index-ip4ZG4ws.js";const _=""+new URL("2_1_3-CPQgKVgt.png",import.meta.url).href,f={},P=u=>(p("data-v-9fe26f42"),u=u(),m(),u),w={class:"container"},x=P(()=>l("div",{class:"content"},[l("h1",{id:"section2"},"第二章 进程管理"),l("h2",{id:"section2.1"},"2.1 进程和线程"),l("h3",{id:"section2.1.1"},"2.1.1 进程的概念和特征"),l("ul",null,[n(" 在多道程序环境下，允许多个程序并发执行，为此引入进程的概念。 为了保证每一个进程能独立地运行，为每个进程配置一个进程控制块PCB，用PCB来描述进程的情况和状态。 进程特征如下: "),l("li",null,"动态性。"),l("li",null,"并发性。"),l("li",null,"独立性。"),l("li",null,"异步性。")]),l("h3",{id:"section2.1.2"},"2.1.2 进程的组成"),l("ul",null,[n(" 进程是一个独立的运行单位，也是操作系统进行资源分配和调度的基本单位。 "),l("li",null,"进程控制块。是进程最核心的部分，包括进程描述信息、进程控制和管理信息、资源分配清单、处理及相关信息。"),l("li",null,"程序段。"),l("li",null,"数据段。")]),l("h3",{id:"section2.1.3"},"2.1.3 进程的状态与转换"),l("p",null,[n(" 进程在其生命周期里通常有5种状态,转换关系如下： "),l("div",{class:"img-container"},[l("img",{src:_,width:"80%"})])]),l("h3",{id:"section2.1.4"},"2.1.4 进程控制"),l("ul",null,[n(" 进程是一个独立的运行单位，也是操作系统进行资源分配和调度的基本单位。 "),l("li",null,"进程创建。"),l("li",null,"进程终止。正常结束、异常结束、外界干预。"),l("li",null,"进程阻塞和唤醒。")]),l("h3",{id:"section2.2.1"},"2.2.1 进程的通信"),l("ul",null,[n(" 进程间的高级通信方式(PV操作为低级通信方式)主要有以下三类： "),l("li",null,"共享存储。"),l("li",null,"消息传递。"),l("li",null,"管道通信。")]),l("h3",{id:"section2.1.6"},"2.1.6 线程和多线程模型"),l("ul",null,[n(" 线程是一个轻量级的进程，它是进程的一个实体，不占有资源，享受其进程的资源。 "),l("li",null,"线程和进程的比较。调度更快(不会引起上下文切换)、并发性更好、系统开销小、支持多处理器系统。"),l("li",null,"线程状态转换。有三种基本状态：就绪态、执行态、阻塞态，和进程转换一样。"),l("li",null,"线程控制块。和进程类似，系统为每个线程配备线程控制块。"),l("li",null,"线程的组织与控制。通常线程在终止之后不会释放资源，还可以被其他线程调用。"),l("li",null,"线程的实现方式。通常分为两类用户级线程和内核级线程，也可以通过两种方式的组合来实现。"),l("li",null,"多线程模型。在同时支持用户级线程和内核级线程的系统中，由于两种线程间连接方式不同，形成多对一、一对一、多对多三种模型。")]),l("h2",{id:"section2.2"},"2.2 cpu调度"),l("h3",{id:"section2.2.1"},"2.2.1 调度的基本概念"),l("ul",null,[n(" 在多道程序系统中，进程的数量往往多于CPU的个数，进程会争用CPU。 cpu调度是对cpu进行分配，选择一个进程执行，以实现进程并发的执行。 一个作业从提交到完成，往往要经历以下三级调度： "),l("li",null,"高级调度（作业调度）。"),l("li",null,"中级调度（内存调度）"),l("li",null,"低级调度（进程调度）"),l("li",null,"需要连续的存储空间")]),l("h3",{id:"section2.2.2"},"2.2.2 调度的实现"),l("ul",null,[l("li",null,"调度程序(调度器)。排队器、分配器、上下文切换器。"),l("li",null,"调度时机、切换和过程。"),l("li",null,"调度方式。"),l("li",null,"闲逛过程。"),l("li",null,"两种线程的调度。")]),l("h3",{id:"section2.2.3"},"2.2.3 调度的目标"),l("ul",null,[l("li",null,"CPU利用率。"),l("li",null,"系统吞吐量。"),l("li",null,"周转时间。"),l("li",null,"等待时间。"),l("li",null,"响应时间。")]),l("h3",{id:"section2.2.4"},"2.2.4 进程切换"),l("p",null," 保存当前进程状态并恢复到另一个进程的状态，这个任务称为上下文切换。 "),l("h3",{id:"section2.2.5"},"2.2.5 典型的调度算法"),l("ul",null,[l("li",null,"先来先服务调度(FCFS)"),l("li",null,"短作业优先调度(SJF)。"),l("li",null,"高响应比优先调度。"),l("li",null,"优先级调度。"),l("li",null,"时间片轮转调度。"),l("li",null,"多级队列调度。"),l("li",null,"多级反馈队列调度。")]),l("h2",{id:"section2.3"},"2.3 同步和互斥"),l("h3",{id:"section2.3.1"},"2.3.1 同步和互斥的概念"),l("ul",null,[n(" 在多道程序环境中，进程是并发执行的，不同进程之间存在着不同的相互制约关系，为了协调进程之间的相互制约关系，引入进程同步的概念。 "),l("li",null,"临界资源。一次仅允许一个进程使用的资源。"),l("li",null,"同步。"),l("li",null,"互斥。")]),l("h3",{id:"section2.3.2"},"2.3.2 实现临界区互斥的基本方法"),l("ul",null,[n(" 软件实现方法： "),l("li",null,"单标志法。只能交替进入。"),l("li",null,"双标志先检验法。可能会同时进入临界区。"),l("li",null,"双标志后检验法。可能发生饥饿现象"),l("li",null,"Peterson算法。"),n(" 硬件实现方法： "),l("li",null,"中断屏蔽法。"),l("li",null,"硬件指令法。TS指令，Swap指令。")]),l("h3",{id:"section2.3.3"},"2.3.3 互斥锁"),l("p",null," 解决临界区最简单的工具就是互斥锁，一个进程在进入临界区时获得锁，在退出临界区时释放锁。 这种互斥锁也称为自旋锁，缺点是忙等待。 "),l("h3",{id:"section2.3.4"},"2.3.4 信号量"),l("ul",null,[n(" 信号量机制是一种功能较强的机制，可以解决互斥和同步问题。 "),l("li",null,"整型信号量。只含有一个用于表示资源数目的整型量S。"),l("li",null,"记录型信号量。除了资源数目变量外，还有一个进程链表L。"),l("li",null,"利用信号量实现进程互斥。"),l("li",null,"利用信号量实现进程同步。"),l("li",null,"利用信号量实现前驱关系。")]),l("h3",{id:"section2.3.5"},"2.3.5 经典同步问题"),l("ul",null,[l("li",null,[n("生产者-消费者问题。 "),l("pre",null,[n("                        "),l("code",null,`
    semaphore mutex = 1;
    semaphore empty = n;
    semaphore full = 0;
    producer(){
        while(1){
            produce();
            P(empty);
            P(mutex);
            add_to_buff();
            V(mutex);
            V(full);
        }
    }
    consumer(){
        while(1){
            P(full);
            P(mutex);
            remove_from_buff();
            V(mutex);
            V(empty);
            consume_data();
        }
    }
                        `),n(`
                    `)])]),l("li",null,[n("读者写者问题。下面是读优先的程序，如果希望写优先，只需要增加一个信号量表示写请求， 读者需要在无写请求时才能读文件。 "),l("pre",null,[n("                        "),l("code",null,`
    //读优先
    int count = 0;
    semaphore mutex = 1;
    semaphore rw = 1;
    writer(){
        P(rw);
        write();
        V(rw);
    }
    reader(){
        while(1){
            P(mutex){
                if(count == 0)P(rw);
            count++;
            V(mutex);
            read();
            P(mutex);
            count--;
            if(count==0)V(rw);
            V(mutex);
            }
        }
    }
                        `),n(`
                    `)])]),l("li",null,[n("哲学家就餐问题。 "),l("pre",null,[n("                        "),l("code",null,`
    semaphore chopstick[5]={1,1,1,1,1};
    semaphore mutex = 1;
    Pi(){ 
        do{
            P(mutex);
            P(chopstick[i]);
            P(chopstick[(i+1)%5]);
            V(mutex);
            eat();
            v(chopstick[i]);
            V(chopstick[(i+1)%5])
        }
    }
                        `),n(`
                    `)])])]),l("h3",{id:"section2.3.6"},"2.3.6 管程"),l("ul",null,[n(" 在信号量机制中，每个要访问临界资源的进程必须自备同步的PV操作。 大量分散的同步操作给系统管理造成了麻烦，并且容易造成死锁。 于是产生了一种新的进程同步的工具，管程。 "),l("li",null,"管程的定义。利用共享数据结构抽象地表示系统中的共享资源， 代表共享资源的数据结构，以及由该共享数据结构实施操作的一组过程所组成的资源管理程序，称为管程。 每次仅允许一个进程进入管程。 "),l("li",null,"条件变量。每个条件变量保存一个等待队列，和信号量类似，只能进行wait和signal操作，但是条件变量没有值。")]),l("h2",{id:"section2.4"},"2.4 死锁"),l("h3",{id:"section2.4.1"},"2.4.1 死锁的概念"),l("ul",null,[l("li",null,"死锁的定义。多个进程因竞争资源造成各个进程都被阻塞。"),l("li",null,"死锁与饥饿。饥饿即进程无穷等待。"),l("li",null,"死锁产生的原因。系统资源的竞争，进程推进顺序非法。"),l("li",null,"死锁产生的必要条件。互斥、不可剥夺、请求并保持、循环等待。"),l("li",null,"死锁的处理策略。死锁预防、避免死锁、思索地检测及解除。")]),l("h3",{id:"section2.4.2"},"2.4.2 死锁预防"),l("ul",null,[n(" 预防死锁的发生只需破坏死锁产生的4个必要条件之一即可。 "),l("li",null,"破坏互斥条件。将某些资源允许共享使用。"),l("li",null,"破坏不可剥夺条件。进程可以释放已经保持的资源。"),l("li",null,"破坏请求并保持条件。采用预先静态分配或是进程在运行过程中逐步释放。"),l("li",null,"破坏循环等待条件。可以采用顺序资源分配法。")]),l("h3",{id:"section2.4.3"},"2.4.3 死锁避免"),l("ul",null,[n(" 在每次分配资源的过程中，都要分析此次资源分配是否会带来死锁风险。 "),l("li",null,"系统安全状态。存在一个进程推进顺序满足进程最大资源需求，即存在一个安全序列。"),l("li",null,"银行家算法。分配资源时检测系统是存在安全序列。")]),l("h3",{id:"section2.4.4"},"2.4.4 死锁的检测和解除"),l("ul",null,[n(" 不对资源分配做限制，提供死锁检测和解除的手段。 "),l("li",null,"死锁检测。资源分配图法。"),l("li",null,"死锁解除。资源剥夺法，撤销进程法，资源回退法。")]),l("br"),l("br"),l("br"),l("br"),l("br")],-1));function V(u,C){const c=e("el-col"),o=e("el-anchor-link"),s=e("el-anchor"),r=e("el-row");return d(),h("div",w,[i(r,{style:{height:"100%"}},{default:t(()=>[i(c,{span:18},{default:t(()=>[x]),_:1}),i(c,{span:6,style:{}},{default:t(()=>[i(s,null,{default:t(()=>[i(o,{href:"#section1",title:"part1"}),i(o,{href:"#section1.1",title:"part2"}),i(o,{href:"#section1.1.1",title:"part3"})]),_:1})]),_:1})]),_:1})])}const b=a(f,[["render",V],["__scopeId","data-v-9fe26f42"]]);export{b as default};
