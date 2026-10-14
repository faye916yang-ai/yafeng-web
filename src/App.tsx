import { useEffect, useState } from "react"
import {
  aboutStory,
  consulting,
  home,
  lifeNow,
  products,
  quests,
  site,
  timeline,
  videos,
} from "./content"

type Page = "home" | "products" | "videos" | "contact" | "courses"
type Theme = "sky" | "mocha"

const pages: { id: Page; label: string }[] = [
  { id: "home", label: "首页" },
  { id: "products", label: "产品" },
  { id: "videos", label: "视频" },
  { id: "contact", label: "联系我" },
  { id: "courses", label: "课程" },
]

function readHash(): Page {
  const h = window.location.hash.replace("#", "")
  if (h === "products" || h === "videos" || h === "contact" || h === "courses") return h
  return "home"
}

function Glyph({ name }: { name: "code" | "home" | "spark" | "mail" | "flow" }) {
  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.8.75 7.2 5.1 7.2-5.1H4.8Z"
        />
      </svg>
    )
  }
  if (name === "code") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8.2 7.3 3.8 12l4.4 4.7 1.1-1-3.4-3.7 3.4-3.7-1.1-1Zm7.6 0-1.1 1 3.4 3.7-3.4 3.7 1.1 1L20.2 12 15.8 7.3ZM10.7 17.2l3.2-10.4h1.4l-3.2 10.4h-1.4Z"
        />
      </svg>
    )
  }
  if (name === "home") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3.2 3.5 10.4h2.1V20h5.2v-6.1h2.4V20h5.2v-9.6h2.1L12 3.2Z"
        />
      </svg>
    )
  }
  if (name === "flow") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 6.5A2.5 2.5 0 1 1 7 11.5 2.5 2.5 0 0 1 7 6.5Zm10 6A2.5 2.5 0 1 1 17 17.5 2.5 2.5 0 0 1 17 12.5ZM8.8 10.4l6.4 2.2.5-1.5-6.4-2.2-.5 1.5Z"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.6 13.4 8h5.7L15.4 11.4 16.9 17 12 13.9 7.1 17l1.5-5.6L4.9 8h5.7L12 2.6Z"
      />
    </svg>
  )
}

function HomePage() {
  return (
    <>
      <section className="split hero">
        <div>
          <p className="kicker">{home.kicker}</p>
          <h1 className="display">
            <span className="lead">{home.line1}</span>
            <span className="hi hi-a">{home.name}</span>
            <span className="row">
              <span className="lead">{home.line2Before}</span>
              <span className="hi hi-b">{home.line2Hi}</span>
            </span>
          </h1>
          <p className="motto">{home.motto}</p>
          <p className="roles">{home.roles}</p>
          <button
            type="button"
            className="cta"
            onClick={() =>
              document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            往下看看 →
          </button>
        </div>
        <div className="portrait">
          <div className="portrait-card">
            <img src="/avatar.png" alt="杨雅风" />
          </div>
          <div className="portrait-dot">YF</div>
        </div>
      </section>

      <section className="split about-hero" id="intro">
        <span className="hi hi-b wish">梦想能够</span>
        <h2 className="display line">
          <span className="row">
            人自由 心自由
            <span className="hi hi-a">钱自由</span>
          </span>
        </h2>
        <div className="story">
          {aboutStory.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className="now-side">
          {lifeNow.map((item, i) => {
            const q = quests[i]
            return (
              <article className="flow-card" key={item.icon}>
                <span className="ico">
                  <Glyph name={item.icon as "code" | "home" | "spark" | "flow"} />
                </span>
                <div>
                  <span>{q.date}</span>
                  <h3>{q.title}</h3>
                  <p>{q.body}</p>
                </div>
              </article>
            )
          })}
        </aside>
      </section>

      <section className="block">
        <h2 className="sec alt">AI创造的路上</h2>
        <div className="rail" aria-label="产品时间轴">
          <div className="rail-head">
            <span>已上线</span>
            <span>待上线</span>
          </div>
          <ol className="rail-list">
            {timeline.map((item) => (
              <li className={`rail-item ${item.side}`} key={`${item.date}-${item.title}`}>
                <article className="rail-card">
                  <div className="rail-meta">
                    <time>{item.date}</time>
                    <em>{item.tag}</em>
                  </div>
                  <p>{item.title}</p>
                </article>
                <span className="rail-dot" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

function ProductsPage() {
  const [openName, setOpenName] = useState<string | null>(null)
  const openProduct = products.find((p) => p.name === openName) ?? null

  useEffect(() => {
    if (!openProduct) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenName(null)
    }
    window.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [openProduct])

  return (
    <section className="block">
      <div className="sec-head">
        <h1 className="sec">产品</h1>
        <p>做成能用的东西</p>
      </div>
      <div className="cards">
        {products.map((p) => {
          const inner = (
            <>
              {p.logo ? (
                <img className="plogo-bg" src={p.logo} alt="" aria-hidden="true" />
              ) : null}
              <div className="card-top">
                <b>{p.n}</b>
                <em className={p.detail || p.href ? "on" : ""}>{p.status}</em>
              </div>
              <div className="pcard-main">
                {p.logo ? (
                  <img className="plogo" src={p.logo} alt="" />
                ) : (
                  <span className="plogo plogo-empty" aria-hidden="true" />
                )}
                <div>
                  <h2>{p.name}</h2>
                  <p>{p.blurb}</p>
                  <span className="platform">{p.platform}</span>
                </div>
              </div>
            </>
          )
          const cls = `pcard tone-${p.tone}`
          if (p.detail) {
            return (
              <button
                type="button"
                className={`${cls} is-openable`}
                key={p.name}
                onClick={() => setOpenName(p.name)}
              >
                {inner}
              </button>
            )
          }
          if (p.href) {
            return (
              <a
                className={cls}
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
              >
                {inner}
              </a>
            )
          }
          return (
            <article className={cls} key={p.name}>
              {inner}
            </article>
          )
        })}
      </div>

      {openProduct?.detail ? (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setOpenName(null)}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top">
              {openProduct.logo ? (
                <img className="plogo" src={openProduct.logo} alt="" />
              ) : null}
              <div>
                <p className="modal-kicker">{openProduct.status}</p>
                <h2 id="product-modal-title">{openProduct.name}</h2>
              </div>
              <button
                type="button"
                className="modal-close"
                aria-label="关闭"
                onClick={() => setOpenName(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              {openProduct.detail.intro.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="platform">{openProduct.platform}</p>
            </div>
            <div className="modal-links">
              {openProduct.detail.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

function VideosPage() {
  return (
    <section className="block">
      <div className="statement">
        <h1>先把喜欢的东西做出来，再把做法拍给你。</h1>
      </div>
      <div className="cards video-cards">
        {videos.map((v) => (
          <a
            className="pcard vcard"
            key={v.n}
            href={v.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="vthumb">
              <img src={v.cover} alt="" />
              <span className="play" aria-hidden="true">
                ▶
              </span>
            </div>
            <div className="card-top">
              <b>{v.n}</b>
              <em className="on">{v.platform}</em>
            </div>
            <h2>{v.title}</h2>
            <p>{v.blurb}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

function ContactPage() {
  const contacts = [
    {
      label: "邮箱",
      value: site.email,
      hint: "咨询与合作，请优先邮件联系",
      href: `mailto:${site.email}`,
      action: "写邮件 →",
    },
    {
      label: "GitHub",
      value: site.github,
      hint: "看看我正在做的产品和代码",
      href: site.githubUrl,
      action: "去看看 →",
    },
    {
      label: "小红书",
      value: site.xhs,
      hint: "AI 实操、产品记录和真实感受",
      href: null,
      action: "搜索账号",
    },
    {
      label: "抖音",
      value: site.douyin,
      hint: "账号确认后会在这里同步",
      href: null,
      action: "敬请期待",
    },
  ]

  return (
    <section className="block contact-page">
      <div className="contact-intro">
        <p className="kicker">CONNECT · COLLABORATE · CREATE</p>
        <h1>找到我，聊聊你想做的事。</h1>
        <p>
          分享 AI 实操，也认真认识每一个想把事情做出来的人。欢迎交流、合作，或来聊聊你的具体问题。
        </p>
      </div>

      <div className="contact-grid" aria-label="联系方式">
        {contacts.map((item, index) => {
          const content = (
            <>
              <div className="contact-card-top">
                <span>0{index + 1}</span>
                <em>{item.action}</em>
              </div>
              <p>{item.label}</p>
              <h2>{item.value}</h2>
              <small>{item.hint}</small>
            </>
          )

          return item.href ? (
            <a
              className="contact-card is-link"
              href={item.href}
              key={item.label}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {content}
            </a>
          ) : (
            <article className="contact-card" key={item.label}>
              {content}
            </article>
          )
        })}
      </div>

      <section className="consulting-card">
        <div className="consulting-copy">
          <p className="kicker">{consulting.eyebrow}</p>
          <h2>{consulting.title}</h2>
          <p>{consulting.intro}</p>
          <a className="cta" href={`mailto:${site.email}?subject=AI 咨询`}>聊聊你的需求 →</a>
        </div>
        <div className="consulting-list">
          {consulting.audiences.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
          <p className="consulting-note">{consulting.note}</p>
        </div>
      </section>
    </section>
  )
}

function CoursesPage() {
  return (
    <section className="block courses-page">
      <div className="course-ticket">
        <span className="course-label">COURSES · COMING SOON</span>
        <div>
          <p className="kicker">正在认真准备中</p>
          <h1>不讲空泛概念，只分享真正用过的方法。</h1>
          <p className="course-copy">
            关于 AI 工具、个人工作流和 vibe coding 的实操课程，正在慢慢打磨。希望它不是“听完就忘”的课，而是能陪你真的做出东西。
          </p>
          <a className="cta" href={`mailto:${site.email}?subject=课程上新提醒`}>对课程感兴趣，告诉我 →</a>
        </div>
        <strong>敬请期待</strong>
      </div>
    </section>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>(() =>
    typeof window === "undefined" ? "home" : readHash(),
  )
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "sky"
    return window.localStorage.getItem("yf-theme") === "mocha" ? "mocha" : "sky"
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem("yf-theme", theme)
  }, [theme])

  useEffect(() => {
    const onHash = () => setPage(readHash())
    window.addEventListener("hashchange", onHash)
    if (!window.location.hash || window.location.hash === "#about") {
      window.location.hash = "home"
    }
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  function go(next: Page) {
    window.location.hash = next
    setPage(next)
    window.scrollTo(0, 0)
  }

  return (
    <div className="shell">
      <header className="top">
        <nav className="pill" aria-label="页面">
          <button type="button" className="brand" onClick={() => go("home")}>
            {site.name}
          </button>
          {pages.map((p) => (
            <button
              key={p.id}
              type="button"
              className={page === p.id ? "is-on" : ""}
              onClick={() => go(p.id)}
            >
              {p.label}
            </button>
          ))}
        </nav>
        <div className="themes" role="group" aria-label="配色">
          <button
            type="button"
            className={theme === "sky" ? "is-on" : ""}
            onClick={() => setTheme("sky")}
          >
            天空蓝
          </button>
          <button
            type="button"
            className={theme === "mocha" ? "is-on" : ""}
            onClick={() => setTheme("mocha")}
          >
            薄荷生巧
          </button>
        </div>
      </header>

      <main>
        {page === "home" && <HomePage />}
        {page === "products" && <ProductsPage />}
        {page === "videos" && <VideosPage />}
        {page === "contact" && <ContactPage />}
        {page === "courses" && <CoursesPage />}
      </main>

      <footer>
        <span>小红书 {site.xhs}</span>
        <span>{site.domain}</span>
      </footer>
    </div>
  )
}
