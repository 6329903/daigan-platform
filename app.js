const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  brief: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"/><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 12h18"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 21a7 7 0 0 0-14 0"/><circle cx="12" cy="7" r="4"/></svg>',
  msg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
  admin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3 4 7v6c0 5 3.4 7.6 8 9 4.6-1.4 8-4 8-9V7z"/><path d="m9 12 2 2 4-5"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10 21h4"/><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 7H5a2 2 0 0 1 0-4h13"/><path d="M5 7h16v14H5a2 2 0 0 1-2-2V5"/><path d="M16 14h.01"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m9 18 6-6-6-6"/></svg>'
};

const art = [
  "linear-gradient(135deg,#2c160b,#d89a25 48%,#15253a)",
  "linear-gradient(135deg,#1c426d,#5eb7ff 48%,#f7d6f6)",
  "linear-gradient(135deg,#27374a,#9aa7b8 48%,#16202d)",
  "linear-gradient(135deg,#151044,#7c3aed 52%,#0ea5e9)",
  "linear-gradient(135deg,#351034,#ef5da8 48%,#1f2937)",
  "linear-gradient(135deg,#073b3a,#1dd3b0 50%,#0f172a)"
];

const nav = [
  ["home", "首页", "home"],
  ["hall", "任务大厅", "list"],
  ["publish", "发布任务", "plus"],
  ["orders", "接单中心", "brief"],
  ["mine", "我的任务", "brief"],
  ["messages", "消息中心", "msg"],
  ["profile", "个人中心", "user"],
  ["admin", "管理后台", "admin"]
];

const tasks = [
  { id: 1, game: "王者荣耀", title: "王者荣耀代打上分", price: 120, time: "1小时前", status: "进行中", statusColor: "#ff5b6e", poster: "张**", taker: "98%好评", desc: "王者段位冲分，要求技术稳定，胜率高，能稳定上分，沟通及时。", contact: "微信：zhangsan_123", deadline: "2026-05-27 23:59", art: art[0] },
  { id: 2, game: "原神", title: "原神每日任务代肝", price: 50, time: "2小时前", status: "待接单", statusColor: "#40dca5", poster: "小**", taker: "99%好评", desc: "每日委托、树脂清理、活动材料收集，按天结算。", contact: "QQ：2749****12", deadline: "2026-05-20 22:00", art: art[1] },
  { id: 3, game: "和平精英", title: "和平精英代打段位", price: 80, time: "3小时前", status: "待接单", statusColor: "#40dca5", poster: "战**", taker: "97%好评", desc: "皇冠到王牌，要求不乱动设置，不开挂不违规。", contact: "微信：peace_run", deadline: "2026-05-25 21:00", art: art[2] },
  { id: 4, game: "英雄联盟", title: "LOL代打排位", price: 150, time: "5小时前", status: "进行中", statusColor: "#ff5b6e", poster: "LOL玩家", taker: "99%好评", desc: "翡翠段位冲钻石，优先中野玩家接单。", contact: "QQ：3912****88", deadline: "2026-05-24 20:00", art: art[3] },
  { id: 5, game: "崩坏：星穹铁道", title: "崩铁遗器材料代肝", price: 60, time: "6小时前", status: "待接单", statusColor: "#40dca5", poster: "理**", taker: "98%好评", desc: "清体力、刷遗器、活动任务，需截图反馈。", contact: "微信：star_rail", deadline: "2026-05-22 18:00", art: art[4] }
];

const state = {
  route: "home",
  selectedTask: tasks[0],
  taskStatus: Object.fromEntries(tasks.map((task) => [task.id, task.status])),
  mineTab: "published",
  profileTab: "info",
  toast: "",
  modalTask: null,
  commission: 10
};

function icon(name) {
  return icons[name] || "";
}

function money(value) {
  return "¥ " + Number(value).toFixed(2);
}

function setRoute(route) {
  state.route = route;
  if (route !== "detail") window.location.hash = route;
  render();
}

function showToast(text) {
  state.toast = text;
  render();
  setTimeout(() => {
    state.toast = "";
    render();
  }, 1800);
}

function statusOf(task) {
  return state.taskStatus[task.id] || task.status;
}

function taskCard(task) {
  const status = statusOf(task);
  const color = status === "已完成" ? "#8b5cf6" : status === "进行中" ? "#ff5b6e" : "#40dca5";
  return `
    <article class="task-card" onclick="openTask(${task.id})">
      <div class="task-art" style="--art:${task.art}"></div>
      <div class="task-body">
        <div class="meta"><span>${task.game}</span><span class="status" style="--status:${color}">${status}</span></div>
        <h3>${task.title}</h3>
        <div class="meta"><span class="price">${money(task.price)}</span><span>${task.time}</span></div>
        <div class="meta" style="margin-top:14px"><span>${task.poster}</span><span>${task.taker}</span></div>
      </div>
    </article>
  `;
}

function taskRow(task) {
  const status = statusOf(task);
  const color = status === "已完成" ? "#8b5cf6" : status === "进行中" ? "#ff5b6e" : "#40dca5";
  return `
    <article class="task-row" onclick="openTask(${task.id})">
      <div class="thumb" style="--art:${task.art}"></div>
      <div><strong>${task.title}</strong><div class="muted small">${task.game} / 发布人 ${task.poster}</div></div>
      <strong class="price">${money(task.price)}</strong>
      <span class="status" style="--status:${color}">${status}</span>
      <span class="muted small">${task.time}</span>
      <button class="secondary" onclick="event.stopPropagation(); openTask(${task.id})">查看详情</button>
    </article>
  `;
}

function openTask(id) {
  state.selectedTask = tasks.find((task) => task.id === id) || tasks[0];
  state.route = "detail";
  window.location.hash = "detail-" + id;
  render();
}

function navButton(item, compact = false) {
  const [route, label, iconName] = item;
  const active = state.route === route || (route === "hall" && state.route === "detail");
  return `<button class="nav-btn ${active ? "active" : ""}" onclick="setRoute('${route}')">${icon(iconName)}${compact ? "" : `<span>${label}</span>`}</button>`;
}

function shell(content) {
  return `
    <div class="app-shell">
      <header class="topbar">
        <button class="brand" onclick="setRoute('home')" aria-label="返回首页">
          <span class="brand-mark"></span>
          <span>代肝平台</span>
        </button>
        <nav class="nav-row">${nav.slice(0, 6).map((item) => navButton(item)).join("")}</nav>
        <label class="search">
          <input placeholder="搜索任务、游戏、用户" />
          ${icon("search")}
        </label>
        <button class="secondary" onclick="setRoute('login')">登录</button>
        <button class="primary" onclick="setRoute('register')">注册</button>
        <button class="icon-btn" onclick="setRoute('messages')" title="消息">${icon("bell")}</button>
        <button class="icon-btn" onclick="toggleTheme()" title="切换日夜模式">${icon("moon")}</button>
        <button class="avatar-btn" onclick="setRoute('profile')" title="个人中心">玩</button>
      </header>
      <aside class="sidebar">
        <nav class="side-nav">${nav.map((item) => navButton(item)).join("")}</nav>
      </aside>
      <main class="main">${content}</main>
      ${state.modalTask ? modal() : ""}
      ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
    </div>
  `;
}

function homeView() {
  const liveOrders = [
    ["原神", "深境螺旋满星", "2分钟前", "¥88"],
    ["LOL", "翡翠冲钻石", "5分钟前", "¥150"],
    ["王者", "荣耀王者冲星", "8分钟前", "¥260"],
    ["Steam", "成就全收集", "12分钟前", "¥120"]
  ];
  const ranks = [
    ["夜行", "本周完成 28 单", "99.4%"],
    ["星河代肝", "本周完成 21 单", "98.7%"],
    ["南风", "本周完成 18 单", "97.9%"]
  ];
  return `
    <div class="view home-stack">
      <section class="home-hero-grid clean-home-hero">
        <div class="hero hero-xl clean-hero">
          <div class="hero-content">
            <div class="eyebrow">${icon("admin")} 展示版任务撮合与托管平台</div>
            <h1><span class="gradient-text">专业游戏代肝平台</span></h1>
            <p>发布游戏代肝需求、接取任务、模拟托管验收与平台抽成。页面展示完整平台结构，不涉及真实支付和用户认证。</p>
            <div class="game-tags">
              ${["王者荣耀", "原神", "英雄联盟", "崩坏", "Steam", "手游"].map((item) => `<span>${item}</span>`).join("")}
            </div>
            <div class="actions">
              <button class="primary" onclick="setRoute('publish')">发布任务</button>
              <button class="secondary" onclick="setRoute('hall')">浏览任务大厅</button>
              <button class="ghost" onclick="setRoute('admin')">查看后台演示</button>
            </div>
          </div>
          <div class="hero-board">
            <div class="board-header">
              <span>任务撮合终端</span>
              <b>ONLINE</b>
            </div>
            <div class="board-task">
              <div>
                <span class="muted small">推荐任务</span>
                <strong>王者荣耀代打上分</strong>
              </div>
              <b class="price">¥120.00</b>
            </div>
            <div class="board-metrics">
              <div><strong>126</strong><span>今日新任务</span></div>
              <div><strong>89</strong><span>托管中</span></div>
              <div><strong>98.6%</strong><span>好评率</span></div>
            </div>
          </div>
        </div>
        <aside class="home-side">
          ${profileMini()}
          <div class="market-feed card">
            <div class="section-title compact"><h2>实时行情</h2><button class="ghost" onclick="setRoute('hall')">大厅</button></div>
            ${liveOrders.map((item) => `
              <div class="feed-row">
                <span>${item[0]}</span>
                <strong>${item[1]}</strong>
                <em>${item[2]}</em>
                <b>${item[3]}</b>
              </div>
            `).join("")}
          </div>
        </aside>
      </section>

      <section class="home-stat-strip clean-stats">
        ${[
          ["24h成交", "¥ 18,920", "+16.8%"],
          ["平均接单", "4分32秒", "快速匹配"],
          ["平台抽成", `${state.commission}%`, "后台可调"],
          ["托管保障", "100%", "验收结算"]
        ].map((item) => `<div class="stat-tile"><span>${item[0]}</span><strong>${item[1]}</strong><em>${item[2]}</em></div>`).join("")}
      </section>

      <section class="home-content-grid">
        <div>
          <div class="section-title"><div><h2>热门任务</h2><p>高价、热门、待处理任务优先展示。</p></div><button class="ghost" onclick="setRoute('hall')">更多任务 ${icon("chevron")}</button></div>
          <div class="task-grid clean-task-grid">${tasks.slice(0, 4).map(taskCard).join("")}</div>
        </div>
        <aside class="card leaderboard">
          <div class="section-title compact"><h2>接单榜</h2><span class="muted small">本周</span></div>
          ${ranks.map((item, index) => `
            <div class="rank-row">
              <span class="rank-index">${index + 1}</span>
              <div><strong>${item[0]}</strong><div class="muted small">${item[1]}</div></div>
              <b>${item[2]}</b>
            </div>
          `).join("")}
        </aside>
      </section>

      <section class="home-bottom-grid">
        <div class="card process-panel">
          <div class="section-title compact"><h2>托管交易流程</h2><p>展示版用动画模拟平台担保链路。</p></div>
          <div class="process-line">
            ${["发布任务", "支付托管", "接单执行", "任务验收", "资金结算"].map((text, index) => `
              <div class="process-node ${index < 3 ? "active" : ""}">
                <span>${index + 1}</span>
                <strong>${text}</strong>
                <em>${["填写需求", "报酬冻结", "进度反馈", "确认完成", "扣除抽成"][index]}</em>
              </div>
            `).join("")}
          </div>
        </div>
        <aside class="notice-card card">
          <div class="section-title compact"><h2>平台公告</h2></div>
          ${["关于平台抽成规则公告", "严厉打击恶意接单行为", "新增游戏：火炬杯·星穹快通", "五一活动奖励发放公告"].map((text, index) => `
            <div class="meta" style="padding:10px 0;border-bottom:1px solid var(--line)"><span>${text}</span><span>05-${20 - index * 2}</span></div>
          `).join("")}
        </aside>
      </section>

      <section class="advantage-row clean-advantages">
        ${["资金托管", "安全可靠", "快速匹配", "专业服务"].map((text, index) => `
          <div class="advantage"><span class="icon">${icon(["wallet", "admin", "list", "user"][index])}</span><div><strong>${text}</strong><div class="muted small">${["平台担保交易安全", "严选审核接单者", "智能推荐任务单", "优质代练团队"][index]}</div></div></div>
        `).join("")}
      </section>
    </div>
    ${footer()}
  `;
}

function profileMini() {
  return `
    <div class="profile-card card">
      <div class="profile-head">
        <div class="big-avatar">玩</div>
        <div><strong>玩家名称 <span class="level">Lv.3</span></strong><div class="muted small">ID：123456</div></div>
      </div>
      <div class="balance">
        <div class="muted">账户余额(元)</div>
        <strong>¥ 888.88</strong>
        <div class="actions" style="margin-top:14px"><button class="primary">充值</button><button class="secondary">提现</button></div>
      </div>
      <div class="stats">
        <div class="stat"><strong>12</strong><span class="muted small">发布任务</span></div>
        <div class="stat"><strong>8</strong><span class="muted small">接单数量</span></div>
        <div class="stat"><strong>15</strong><span class="muted small">完成任务</span></div>
        <div class="stat"><strong>¥1560</strong><span class="muted small">总收入</span></div>
      </div>
    </div>
  `;
}

function hallView() {
  return `
    <section class="view">
      <div class="page-title"><div><h1>任务大厅</h1><p>浏览、筛选并进入任务详情，当前均为模拟数据。</p></div><button class="primary" onclick="setRoute('publish')">发布任务</button></div>
      <div class="filters">
        <select class="control"><option>全部游戏</option><option>王者荣耀</option><option>原神</option><option>英雄联盟</option></select>
        <select class="control"><option>任务金额</option><option>50元以下</option><option>50-100元</option><option>100元以上</option></select>
        <select class="control"><option>任务状态</option><option>待接单</option><option>进行中</option><option>已完成</option></select>
        <select class="control"><option>发布时间</option><option>最新发布</option><option>一天内</option><option>一周内</option></select>
        <button class="secondary">筛选</button>
      </div>
      <div class="task-list">${tasks.map(taskRow).join("")}</div>
    </section>
  `;
}

function detailView() {
  const task = state.selectedTask;
  const status = statusOf(task);
  return `
    <section class="view detail-grid">
      <div class="card">
        <div class="detail-hero" style="--art:${task.art}"></div>
        <div class="detail-content">
          <div class="meta"><span>${task.game}</span><span class="status" style="--status:${task.statusColor}">${status}</span></div>
          <h1>${task.title}</h1>
          <p class="muted">${task.desc}</p>
          <div class="info-grid">
            <div class="info-item"><span class="muted small">任务报酬</span><strong class="price">${money(task.price)}</strong></div>
            <div class="info-item"><span class="muted small">完成期限</span><strong>${task.deadline}</strong></div>
            <div class="info-item"><span class="muted small">发布人</span><strong>${task.poster}</strong></div>
            <div class="info-item"><span class="muted small">联系方式</span><strong>${task.contact}</strong></div>
          </div>
          <div class="actions">
            <button class="primary" onclick="confirmTake(${task.id})">立即接单</button>
            <button class="secondary" onclick="setRoute('hall')">返回大厅</button>
          </div>
        </div>
      </div>
      <aside>
        <div class="card detail-content">
          <h2>任务流程</h2>
          ${["发布任务", "支付托管", "接单执行", "发布者验收", "资金结算"].map((text, index) => `<div class="meta" style="padding:12px 0;border-bottom:1px solid var(--line)"><span>${index + 1}. ${text}</span><span>${index < 2 ? "已模拟" : "待操作"}</span></div>`).join("")}
        </div>
        <div class="card detail-content" style="margin-top:16px">
          <h2>收益计算</h2>
          <div class="kv"><span class="muted">任务金额</span><strong>${money(task.price)}</strong></div>
          <div class="kv"><span class="muted">平台抽成</span><strong>${state.commission}%</strong></div>
          <div class="kv"><span class="muted">接单者到账</span><strong class="price">${money(task.price * (1 - state.commission / 100))}</strong></div>
        </div>
      </aside>
    </section>
  `;
}

function publishView() {
  return `
    <section class="view detail-grid">
      <div class="card detail-content">
        <div class="page-title"><div><h1>发布任务</h1><p>填写任务信息后进入模拟支付托管流程。</p></div></div>
        <div class="form-grid">
          <div class="field"><label>游戏名称</label><select class="control"><option>王者荣耀</option><option>原神</option><option>英雄联盟</option><option>Steam游戏</option></select></div>
          <div class="field"><label>任务标题</label><input class="control" placeholder="例如：王者荣耀钻石上星耀" /></div>
          <div class="field wide"><label>任务描述</label><textarea class="control" placeholder="请详细描述任务目标、账号限制、验收要求..."></textarea></div>
          <div class="field"><label>任务报酬</label><input class="control" placeholder="请输入金额" /></div>
          <div class="field"><label>完成期限</label><input class="control" type="date" /></div>
          <div class="field"><label>联系方式类型</label><select class="control"><option>微信</option><option>QQ</option></select></div>
          <div class="field"><label>联系方式</label><input class="control" placeholder="请输入微信号或QQ号" /></div>
        </div>
        <div class="actions" style="margin-top:18px"><button class="primary" onclick="showToast('任务已发布，报酬进入平台托管演示流程')">模拟支付并发布</button><button class="secondary" onclick="setRoute('hall')">先去看看任务</button></div>
      </div>
      <aside class="card detail-content">
        <h2>支付托管展示</h2>
        <div class="flow" style="grid-template-columns:1fr">
          <div class="flow-step active"><strong>1. 发布任务</strong><p class="muted">提交游戏、目标、报酬与联系方式。</p></div>
          <div class="flow-step active"><strong>2. 支付报酬</strong><p class="muted">展示版仅做按钮与状态动画。</p></div>
          <div class="flow-step active"><strong>3. 平台托管</strong><p class="muted">任务完成后模拟结算给接单者。</p></div>
        </div>
      </aside>
    </section>
  `;
}

function ordersView() {
  return `
    <section class="view">
      <div class="page-title"><div><h1>接单中心</h1><p>适合接单者快速查看待接任务与预估收益。</p></div></div>
      <div class="task-grid">${tasks.filter((task) => statusOf(task) !== "已完成").map(taskCard).join("")}</div>
    </section>
  `;
}

function mineView() {
  const tabs = [["published", "我发布的"], ["taken", "我接取的"], ["doing", "进行中"], ["done", "已完成"]];
  const visible = tasks.filter((task, index) => {
    if (state.mineTab === "doing") return statusOf(task) === "进行中";
    if (state.mineTab === "done") return statusOf(task) === "已完成";
    if (state.mineTab === "taken") return index % 2 === 1;
    return index % 2 === 0;
  });
  return `
    <section class="view">
      <div class="page-title"><div><h1>我的任务</h1><p>展示发布、接取、进行中、已完成任务。</p></div></div>
      <div class="tabs">${tabs.map(([id, label]) => `<button class="tab ${state.mineTab === id ? "active" : ""}" onclick="state.mineTab='${id}';render()">${label}</button>`).join("")}</div>
      <div class="task-list">${visible.map((task) => `
        <article class="task-row">
          <div class="thumb" style="--art:${task.art}"></div>
          <div><strong>${task.title}</strong><div class="muted small">${task.game} / ${task.time}</div></div>
          <strong class="price">${money(task.price)}</strong>
          <span class="status" style="--status:${statusOf(task) === "已完成" ? "#8b5cf6" : "#ff5b6e"}">${statusOf(task)}</span>
          <button class="success-btn" onclick="completeTask(${task.id})">模拟验收</button>
          <button class="secondary" onclick="openTask(${task.id})">详情</button>
        </article>
      `).join("") || `<div class="card detail-content">暂无对应任务。</div>`}</div>
    </section>
  `;
}

function profileView() {
  const tabs = [
    ["info", "账户信息", "user"],
    ["tasks", "我的任务", "brief"],
    ["wallet", "账户余额", "wallet"],
    ["messages", "消息中心", "msg"],
    ["settings", "设置", "admin"]
  ];
  return `
    <section class="view profile-layout">
      <aside class="card center-menu profile-menu">
        <div class="profile-menu-head">
          <div class="big-avatar">玩</div>
          <strong>玩家名称 <span class="level">Lv.3</span></strong>
          <span class="muted small">ID：123456</span>
        </div>
        ${tabs.map(([id, text, iconName]) => `<button class="nav-btn ${state.profileTab === id ? "active" : ""}" onclick="state.profileTab='${id}';render()">${icon(iconName)}<span>${text}</span></button>`).join("")}
      </aside>
      <div class="profile-main">
        <div class="profile-summary card">
          <div>
            <span class="muted small">账户概览</span>
            <h1>个人中心</h1>
            <p class="muted">管理资料、任务、余额、消息和展示版偏好设置。</p>
          </div>
          <button class="primary" onclick="showToast('资料编辑为展示版模拟操作')">编辑资料</button>
        </div>
        <div class="profile-overview-grid">
          <div class="stat card"><strong>12</strong><span class="muted">发布任务</span></div>
          <div class="stat card"><strong>8</strong><span class="muted">接单数量</span></div>
          <div class="stat card"><strong>15</strong><span class="muted">完成任务</span></div>
          <div class="stat card"><strong>¥1560</strong><span class="muted">总收入</span></div>
        </div>
        ${profileTabContent()}
      </div>
    </section>
  `;
}

function profileTabContent() {
  if (state.profileTab === "tasks") {
    return `
      <div class="card profile-panel">
        <div class="section-title compact"><h2>我的任务</h2><button class="ghost" onclick="setRoute('mine')">查看全部</button></div>
        <div class="task-list">${tasks.slice(0, 3).map(taskRow).join("")}</div>
      </div>
    `;
  }
  if (state.profileTab === "wallet") {
    return `
      <div class="card profile-panel">
        <div class="wallet-hero">
          <span class="muted">账户余额</span>
          <strong>¥ 888.88</strong>
          <div class="actions"><button class="primary" onclick="showToast('充值为展示版模拟操作')">充值</button><button class="secondary" onclick="showToast('提现为展示版模拟操作')">提现</button></div>
        </div>
        ${["收入记录：原神每日任务 +¥45.00", "提现记录：银行卡尾号 8899 -¥200.00", "托管冻结：王者荣耀任务 ¥120.00"].map((item) => `<div class="kv"><span class="muted">记录</span><strong>${item}</strong></div>`).join("")}
      </div>
    `;
  }
  if (state.profileTab === "messages") {
    return `
      <div class="card profile-panel">
        <div class="section-title compact"><h2>消息中心</h2><button class="ghost" onclick="setRoute('messages')">更多</button></div>
        ${["任务验收提醒：原神每日任务等待确认", "系统通知：请勿站外交易", "接单提醒：LOL排位任务有新进度"].map((item, index) => `<div class="message-row"><strong>${item}</strong><span class="muted small">${index + 1}小时前</span></div>`).join("")}
      </div>
    `;
  }
  if (state.profileTab === "settings") {
    return `
      <div class="card profile-panel">
        <div class="section-title compact"><h2>设置</h2><p>展示版设置项可点击反馈。</p></div>
        <div class="setting-row"><div><strong>夜间模式</strong><span class="muted small">跟随当前页面主题切换</span></div><button class="secondary" onclick="toggleTheme();showToast('主题已切换')">切换</button></div>
        <div class="setting-row"><div><strong>接单通知</strong><span class="muted small">任务状态变化时提醒</span></div><button class="secondary" onclick="showToast('接单通知已模拟切换')">开启</button></div>
        <div class="setting-row"><div><strong>绑定手机号</strong><span class="muted small">当前 138****8888</span></div><button class="secondary" onclick="showToast('手机号验证为展示版模拟操作')">修改</button></div>
      </div>
    `;
  }
  return `
    <div class="card profile-panel">
      <div class="section-title compact"><h2>账户信息</h2><p>个人资料展示版。</p></div>
      <div class="profile-info-grid">
        <div class="kv"><span class="muted">手机号</span><strong>138****8888</strong></div>
        <div class="kv"><span class="muted">昵称</span><strong>玩家名称</strong></div>
        <div class="kv"><span class="muted">微信号</span><strong>player_123</strong></div>
        <div class="kv"><span class="muted">QQ号</span><strong>123456789</strong></div>
        <div class="kv wide"><span class="muted">个人简介</span><strong>这个人很懒，什么都没留下。</strong></div>
      </div>
    </div>
  `;
}

function adminView() {
  const total = tasks.reduce((sum, task) => sum + task.price, 0);
  return `
    <section class="view">
      <div class="page-title"><div><h1>管理后台</h1><p>展示任务管理、用户管理、抽成设置和平台统计。</p></div></div>
      <div class="admin-grid">
        <div class="stat card"><strong>${tasks.length}</strong><span class="muted">任务总数</span></div>
        <div class="stat card"><strong>328</strong><span class="muted">用户数量</span></div>
        <div class="stat card"><strong>${money(total * 18)}</strong><span class="muted">交易金额</span></div>
        <div class="stat card"><strong>${money(total * 18 * state.commission / 100)}</strong><span class="muted">平台收益</span></div>
      </div>
      <div class="detail-grid" style="margin-top:18px">
        <div class="card detail-content">
          <h2>数据统计</h2>
          <div class="chart">
            <div class="bar" style="--h:68%" data-label="任务"></div>
            <div class="bar" style="--h:82%" data-label="用户"></div>
            <div class="bar" style="--h:58%" data-label="交易"></div>
            <div class="bar" style="--h:44%" data-label="收益"></div>
            <div class="bar" style="--h:76%" data-label="完成"></div>
          </div>
        </div>
        <aside class="card detail-content">
          <h2>抽成管理</h2>
          <p class="muted">当前平台抽成比例：${state.commission}%</p>
          <div class="actions">${[5, 10, 15].map((value) => `<button class="${state.commission === value ? "primary" : "secondary"}" onclick="state.commission=${value};showToast('平台抽成已调整为 ${value}%')">${value}%</button>`).join("")}</div>
        </aside>
      </div>
      <div class="section-title"><h2>任务管理</h2></div>
      <div class="task-list">${tasks.map(taskRow).join("")}</div>
    </section>
  `;
}

function authView(type) {
  const isLogin = type === "login";
  return `
    <section class="view auth-shell">
      <div class="auth-card card">
        <div class="brand" style="margin-bottom:22px"><span class="brand-mark"></span><span>代肝平台</span></div>
        <h1>${isLogin ? "欢迎回来" : "创建账号"}</h1>
        <p class="muted">${isLogin ? "登录后可发布任务、接单与查看托管流程。" : "注册成功后自动进入平台展示版。"}</p>
        <div class="tabs"><button class="tab active">手机号${isLogin ? "登录" : "注册"}</button><button class="tab">密码登录</button></div>
        <div class="field"><label>手机号</label><input class="control" placeholder="请输入手机号" /></div>
        ${isLogin ? `<div class="field"><label>验证码 / 密码</label><input class="control" placeholder="请输入验证码或密码" /></div>` : `
          <div class="field"><label>验证码</label><div style="display:grid;grid-template-columns:1fr 110px;gap:10px"><input class="control" placeholder="请输入验证码" /><button class="secondary">获取验证码</button></div></div>
          <div class="field"><label>用户名</label><input class="control" placeholder="请输入用户名" /></div>
          <div class="field"><label>密码</label><input class="control" type="password" placeholder="请输入密码" /></div>
          <div class="field"><label>确认密码</label><input class="control" type="password" placeholder="请再次输入密码" /></div>
        `}
        <button class="primary" style="width:100%" onclick="setRoute('home');showToast('${isLogin ? "登录" : "注册"}成功，已进入展示版')">${isLogin ? "登录" : "注册"}</button>
        <p class="muted small" style="text-align:center">${isLogin ? `还没有账号？<a onclick="setRoute('register')">立即注册</a>` : `已有账号？<a onclick="setRoute('login')">立即登录</a>`}</p>
      </div>
    </section>
  `;
}

function messagesView() {
  return `
    <section class="view">
      <div class="page-title"><div><h1>消息中心</h1><p>系统通知、任务沟通和验收提醒。</p></div></div>
      <div class="task-list">
        ${["你的王者荣耀代打任务已有接单者申请", "原神每日任务已完成，请进行验收", "平台抽成比例将在后台展示中可调整", "请勿在站外进行资金交易"].map((text, index) => `
          <div class="card detail-content"><div class="meta"><strong>${text}</strong><span>${index + 1}小时前</span></div><p class="muted">展示版消息，用于呈现平台通知结构。</p></div>
        `).join("")}
      </div>
    </section>
  `;
}

function modal() {
  const task = state.modalTask;
  return `
    <div class="modal-backdrop" onclick="state.modalTask=null;render()">
      <div class="modal" onclick="event.stopPropagation()">
        <h2>确认接单？</h2>
        <p class="muted">接取「${task.title}」后任务状态将变为进行中，展示版会直接更新本地模拟数据。</p>
        <div class="info-item"><span class="muted small">预计到账</span><strong class="price">${money(task.price * (1 - state.commission / 100))}</strong></div>
        <div class="actions" style="margin-top:18px"><button class="primary" onclick="takeTask(${task.id})">确认接单</button><button class="secondary" onclick="state.modalTask=null;render()">取消</button></div>
      </div>
    </div>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <span>联系方式：support@daigan.demo</span>
      <span>平台介绍 / 用户协议 / 隐私政策</span>
      <span>展示版不涉及真实支付、数据库和资金托管</span>
    </footer>
  `;
}

function confirmTake(id) {
  state.modalTask = tasks.find((task) => task.id === id);
  render();
}

function takeTask(id) {
  state.taskStatus[id] = "进行中";
  state.modalTask = null;
  showToast("接单成功，任务已进入进行中");
}

function completeTask(id) {
  state.taskStatus[id] = "已完成";
  showToast("任务已模拟验收完成，资金结算流程已触发");
}

function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
}

function routeView() {
  const routes = {
    home: homeView,
    hall: hallView,
    detail: detailView,
    publish: publishView,
    orders: ordersView,
    mine: mineView,
    profile: profileView,
    admin: adminView,
    login: () => authView("login"),
    register: () => authView("register"),
    messages: messagesView
  };
  return (routes[state.route] || homeView)();
}

function readHash() {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;
  if (hash.startsWith("detail-")) {
    const id = Number(hash.replace("detail-", ""));
    state.selectedTask = tasks.find((task) => task.id === id) || tasks[0];
    state.route = "detail";
    return;
  }
  state.route = hash;
}

function render() {
  document.getElementById("app").innerHTML = shell(routeView());
}

window.setRoute = setRoute;
window.openTask = openTask;
window.confirmTake = confirmTake;
window.takeTask = takeTask;
window.completeTask = completeTask;
window.toggleTheme = toggleTheme;
window.render = render;
window.state = state;

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

readHash();
window.addEventListener("hashchange", () => {
  readHash();
  render();
});
render();
