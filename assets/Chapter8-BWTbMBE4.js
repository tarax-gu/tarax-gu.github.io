import{_ as r,r as e,o as d,m as h,b as i,w as o,p,i as _,a as n,e as l}from"./index-ip4ZG4ws.js";const f={},j=t=>(p("data-v-a580f85f"),t=t(),_(),t),O={class:"container"},m=j(()=>n("div",{class:"content"},[n("h1",{id:"section8"},"第八章 排序"),n("h2",{id:"section8.1"},"8.1 排序的基本概念"),n("h3",{id:"section8.1.1"},"8.1.1 排序的定义"),n("p",null," 排序，即重新排列表中元素，使表中元素满足按关键字有序的过程。 若两个元素关键字相同，排序后不交换元素先后顺序，则称该排序算法为稳定的。 "),n("h2",{id:"section8.2"},"8.2 插入排序"),n("h3",{id:"section8.2.1"},"8.2.1 直接插入排序"),n("ul",null,[l(" 即先找出元素位置，然后将之后的元素后移一位，将该元素复制到该位置。 "),n("li",null,"空间复杂度：O(1)"),n("li",null,"时间复杂度：O(n2)"),n("li",null,"稳定的，可用于链表。")]),n("pre",null,[l("                "),n("code",null,`
    void insertsort(int a[],int n){
        int i,j;
        for(i = 1;i < n;i++){
            int t = a[i];
            for(j = i-1;t < a[j]&&j >=0; j--){
                a[j+1]=a[j];
            }
            a[j+1]=t;
        }
    }                    
                `),l(`
            `)]),n("h3",{id:"section8.2.2"},"8.2.2折半插入排序"),n("ul",null,[l(" 即采用折半查找确定插入位置。 "),n("li",null,"空间复杂度：O(1)"),n("li",null,"时间复杂度：O(n2)"),n("li",null,"稳定的，仅可用于顺序表。")]),n("h3",{id:"section8.2.3"},"8.2.3 希尔排序"),n("ul",null,[l(" 将待排序表分割成若干子表，对各个子表进行直接插入排序，再对全体记录进行一次直接插入排序。 "),n("li",null,"空间复杂度：O(1)"),n("li",null,"时间复杂度：O(n2)"),n("li",null,"不稳定，仅可用于顺序表。")]),n("h2",{id:"section8.3"},"8.3 交换排序"),n("h3",{id:"section8.3.1"},"8.3.1 冒泡排序"),n("ul",null,[l(" 一趟冒泡为比较相邻的值，若为逆序则交换，进行n-1趟冒泡即可排完序。 "),n("li",null,"空间复杂度：O(1)"),n("li",null,"时间复杂度：O(n2)"),n("li",null,"稳定的，可用于顺序表和链表。")]),n("pre",null,[l("                "),n("code",null,`
    void bubblesort(int a[],int n){
        for(int i = 0;i < n;i++){
            bool flag = false;
            for(int j = 0 ; j < n - i - 1 ; j++){
                if(a[j]>a[j+1]){
                    swap(a[j],a[j+1]);
                    flag = true;
                }
            }
            if(flag==false)return;
        }
    }
                `),l(`
            `)]),n("h3",{id:"section8.3.2"},"8.3.2 快速排序"),n("ul",null,[l(" 采用分治法，每一躺快速排序是一个交替搜索和交换的过程，将整个表分成大于基准元素和小于基准元素的两个子表，在对子表进行操作，直到子表长为1。 快速排序是所有内部排序中平均性能最优的算法。 "),n("li",null,"空间复杂度：O(logn)"),n("li",null,"时间复杂度：O(nlogn)"),n("li",null,"不稳定，仅可用于顺序表。")]),n("pre",null,[l("                "),n("code",null,`
    void quicksort(int a[],int start,int end){
        int i = start+1,j = end;
        if(i>j)return;
        while(i<=j){
            for(;j>start&&a[j]>a[start];--j);
            for(;i<=end&&a[i]< a[start];++i);
            if(i< j)swap(a[j],a[i]);
        }
        swap(a[j],a[start]);
        quicksort(a,start,j-1);
        quicksort(a,j+1,end);
    }
                `),l(`
            `)]),n("h2",{id:"section8.4"},"8.4 选择排序"),n("h3",{id:"section8.4.1"},"8.4.1 简单选择排序"),n("ul",null,[l(" 每一趟排序选择出最小的元素，确定一个元素的位置。 "),n("li",null,"空间复杂度：O(1)"),n("li",null,"时间复杂度：O(n2)"),n("li",null,"稳定的，可用于顺序表和链表。")]),n("h3",{id:"section8.4.2"},"8.4.2 堆排序"),n("ul",null,[l("建立一个大根堆或小根堆，堆顶元素为最大值或最小值，输出之后，将堆底元素送入堆顶，进行调整。 "),n("li",null,"空间复杂度：O(1)"),n("li",null,"时间复杂度：O(nlogn),建堆时间为O(n)"),n("li",null,"不稳定的，可用于顺序表。")]),n("h2",{id:"section8.5"},"8.5 归并排序、基数排序"),n("h3",{id:"section8.5.1"},"8.5.1 归并排序"),n("ul",null,[l("将两个或两个以上的有序表合成一个有序表，直到只剩下一个表。 "),n("li",null,"空间复杂度：O(n)"),n("li",null,"时间复杂度：O(nlogn)"),n("li",null,"不稳定的，可用于顺序表和链表。")]),n("h3",{id:"section8.5.2"},"8.5.2 基数排序"),n("ul",null,[l(" 基于关键字大小进行排序(高位优先，或低位优先)。 "),n("li",null,"空间复杂度：O(r)"),n("li",null,"时间复杂度：O(d(n+r))"),n("li",null,"稳定的，可用于顺序表和链表。")]),n("h2",{id:"section8.6"},"8.6 外部排序"),n("h3",{id:"section8.6.1"},"8.6.1 外部排序"),n("p",null," 对大文件进行排序时，无法将整个文件复制入内存进行排序，需要在外部记录一定的记录，进行一步一步内存的调换和排序。 "),n("h3",{id:"section8.6.2"},"8.6.2 外部排序方法"),n("p",null," 通常选择归并排序。可增大归并路数或减少初始段数，能减少归并趟数S，进而减少读写磁盘次数。 "),n("h3",{id:"section8.6.3"},"8.6.3 多路平衡归并和败者树"),n("p",null," 进行k路平衡归并时，需要在k个归并段中选择最小的值，引入败者树，减少在k个归并段中比较的次数。 "),n("h3",{id:"section8.6.4"},"8.6.4 置换选择排序（生成初始归并段）"),n("p",null," 从工作区依次输出最小长度的记录，直到达到归并段的长度，比较最小记录时可采用败者树。 "),n("h3",{id:"section8.6.4"},"8.6.4 最佳归并树"),n("p",null," 文件经过置换选择排序后，生成长度不等的归并段，利用哈夫曼树进行归并，可使IO次数最少。 注意哈夫曼树是严格的m叉树，当归并段数量不足时需要添加虚段。 "),n("br"),n("br"),n("br"),n("br"),n("br")],-1));function b(t,k){const s=e("el-col"),a=e("el-anchor-link"),u=e("el-anchor"),c=e("el-row");return d(),h("div",O,[i(c,{style:{height:"100%"}},{default:o(()=>[i(s,{span:18},{default:o(()=>[m]),_:1}),i(s,{span:6,style:{}},{default:o(()=>[i(u,null,{default:o(()=>[i(a,{href:"#section1",title:"part1"}),i(a,{href:"#section1.1",title:"part2"}),i(a,{href:"#section1.1.1",title:"part3"})]),_:1})]),_:1})]),_:1})])}const g=r(f,[["render",b],["__scopeId","data-v-a580f85f"]]);export{g as default};
