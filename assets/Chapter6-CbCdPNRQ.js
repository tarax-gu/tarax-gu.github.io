import{_ as r,r as t,o as a,m as p,b as i,w as o,p as v,i as h,a as n,e as l}from"./index-ip4ZG4ws.js";const _={},f=e=>(v("data-v-e18ab9d4"),e=e(),h(),e),w={class:"container"},G=f(()=>n("div",{class:"content"},[n("h1",{id:"section6"},"第六章 图"),n("h2",{id:"section6.1"},"6.1 图的基本概念"),n("h3",{id:"section6.1.1"},"6.1.1 图的定义"),n("ul",null,[l("图由顶点集V和边集E组成，记为G={V,E}。 "),n("li",null,"有向图。即边有向。"),n("li",null,"无向图。即边无向。"),n("li",null,"简单图、多重图。不存在重复边，不存在自指边的图为简单图。多重图和简单图相对。"),n("li",null,"完全图。任意两个点之间都存在边。"),n("li",null,"子图。即边集和点即均为原图的子集，且可以构成图。"),n("li",null,"连通、连通图和连通分量。两个点v、w之间有路径，即v和w连通，若任意两个顶点连通，则图G为连通图。 极大连通子图为连通分量。 "),n("li",null,"强连通图和强连通分量。在有向图中，点v到点w和点w到点v之间都有路径，则v和w强连通，若任意两个顶点强连通，则图G为强连通图。 极大强连通子图为强连通分量。 "),n("li",null,"生成树、生成森林。连通图的生成树是包含图中全部顶点的一个极小连通子图，非连通图中，连通分量的生成树构成了非连通图的生成森林。 "),n("li",null,"顶点的度（无向图），入度和出度（有向图）"),n("li",null,"边的权和网"),n("li",null,"稠密图、稀疏图"),n("li",null,"路径、路径长度、回路"),n("li",null,"简单路径、简单回路"),n("li",null,"距离"),n("li",null,"有向树")]),n("h2",{id:"section6.2"},"6.2 图的存储和基本操作"),n("h3",{id:"section6.2.1"},"6.2.1 图的存储"),n("ul",null,[n("li",null,"邻接矩阵法。即用二维数组存储边的信息。"),n("li",null,"邻接表法。为每一个顶点建立一个单链表，再依次存储边。"),n("li",null,"十字链表。是有向图的一种链式存储结构。弧用弧节点存储，顶点用点结点存储。 弧头和弧尾相同的弧会被串联到一个链表中。 "),n("li",null,"邻接多重表。是无向图的一种链式存储结构。与十字链表类似，每条边用一个节点表示， 相关联的边被串联到一起形成一个链表。")]),n("h3",{id:"section6.2.2"},"6.2.2 图的基本操作"),n("p",null," 图的基本操作是独立与图的存储结构的，对于不同的结构会有不同的性能。 基本操作包括：判断边是否存在、列出相关边、插入顶点、删除顶点、加边、去边等。 图的遍历：深度优先和广度优先。 "),n("h2",{id:"section6.3"},"6.3 图的遍历"),n("p",null,"图的遍历是指从图中的某一点出发，按照某种方法沿图中的边对图中的所有顶点访问一次，且仅访问一次。 图的遍历算法主要有两种：广度优先搜索和深度优先搜索。 "),n("h3",{id:"section6.3.1"},"6.3.1 广度优先搜索"),n("p",null," 广度优先搜索是一种分层的查找过程，由近及远的访问相通的顶点(可以求单源最短路径)。 "),n("pre",null,[l("                    "),n("code",null,`
    bool visited[MAX_VERTEX_NUM]
    void BFSTraverse(Graph G){
        for(int i = 0;i < G.vexnum;i++){
            visited[i]=false;
            InitQuene(Q);
            for(int i = 0 ; i < G.vexnum;i++){
                if(!visted[i]){
                    BFS(G,i);
                }
            }
        }
    }
    void BFS(Graph G,int i){
        visit(i);
        visit(i)=true;
        EnQuene(Q,i);
        while(!IsEmpty(Q)){
            DeQueue(Q,v);
            for(w=0;w < G.vexnum;w++){
                if(visited[w]==false&&G.edge[v][w]==1){
                    visited(w);
                    visited[w]=true;
                    Enqueue(Q,w);
                }
            }
        }
    }
                    `),l(`
                `)]),n("h3",{id:"section6.3.2"},"6.3.2 深度优先搜索"),n("p",null," 深度优先搜索类似于树的先序遍历，这种搜索算法的策略是尽可能深的搜索一个图。 "),n("pre",null,[l("                    "),n("code",null,`
    bool visited[MAX_VERTEX_NUM]
    void DFSTraverse(Graph G){
        for(int i = 0;i < G.vexnum;i++){
            visited[i]=false;
            for(int i = 0 ; i < G.vexnum;i++){
                if(!visted[i]){
                    DFS(G,i);
                }
            }
        }
    }
    void DFS(Graph G,int i){
        visit(i);
        visit(i)=true;
        for(w=0;w < G.vexnum;w++){
            if(visited[w]==false&&G.edge[i][w]==1){
                DFS(G,w);
            }
        }
        
    }
                    `),l(`
                `)]),n("h3",{id:"section6.3.3"},"6.3.3 图的遍历和图的连通性"),n("p",null," 图的遍历算法可以用来判断图的连通性，即从一个点出发，能否通过一次遍历访问图中的每个顶点。 "),n("h2",{id:"section6.4"},"6.4 图的应用"),n("h3",{id:"section6.4.1"},"6.4.1 最小生成树"),n("ul",null,[l(" 一个连通图的最小生成树包含图的所有顶点，并且只含尽可能少的边。 对于带权无向连通图，权值和最小的那颗生成树被称为最小生成树。 "),n("li",null,"prim算法。首先选取一个顶点加入集合，然后依次将距离集合中顶点距离最近的点加入集合。适合边稠密的图"),n("li",null,"kruskal算法。依次选取最短的边，若在加入这条边后不形成回路(可使用并查集判断)，则加入这条边， 否则选取下一条最短边。适合边稀疏而顶点多的图")]),n("h3",{id:"section6.4.2"},"6.4.2 最短路径"),n("ul",null,[l("对于带权图，带权路径长度最短的路径称为最短路径。 "),n("li",null,"Dijkstra算法。基于贪心策略，从一个点出发，依次加入离该集合最近的点，并更新距离。"),n("li",null,"Floyd算法。生成一个n阶方阵序列，选取方阵中的最小值作为距离。")]),n("h3",{id:"section6.4.3"},"6.4.3 有向无环图描述表达式"),n("p",null," 在二叉树中，可能重复出现一个子树，但是在有向无环图中，可以实现对相同子式的共享。 "),n("h3",{id:"section6.4.4"},"6.4.4 拓扑排序"),n("p",null," AOV网：，无权有向图中，以点表示活动，边的方向表示活动的顺序。在图论中，满足每个顶点只出现一次，且若顶点A在顶点B的前面，则不存在B到A的路径的顶点序列被称为拓扑排序。 一个常用的获得拓扑排序的方法：选择入度为0的点作为起点并输出，删除该点且以该为起点的有向边，重复该过程直到输出所有的顶点。 DFS在 "),n("h3",{id:"section6.4.5"},"6.4.5 关键路径"),n("p",null," AOE网：在带权有向图中，以顶点表示事件，以边表示活动。 源点为入度为0的点，汇点为出度为0的点，从源点到汇点的所有路径中，具有最大路径长度的路径称为关键路径，关键路径上的活动被称为关键活动。 关键路径的长度就是工程的最短完成时间。 "),n("br"),n("br"),n("br"),n("br"),n("br")],-1));function m(e,x){const u=t("el-col"),s=t("el-anchor-link"),c=t("el-anchor"),d=t("el-row");return a(),p("div",w,[i(d,{style:{height:"100%"}},{default:o(()=>[i(u,{span:18},{default:o(()=>[G]),_:1}),i(u,{span:6,style:{}},{default:o(()=>[i(c,null,{default:o(()=>[i(s,{href:"#section1",title:"part1"}),i(s,{href:"#section1.1",title:"part2"}),i(s,{href:"#section1.1.1",title:"part3"})]),_:1})]),_:1})]),_:1})])}const S=r(_,[["render",m],["__scopeId","data-v-e18ab9d4"]]);export{S as default};
