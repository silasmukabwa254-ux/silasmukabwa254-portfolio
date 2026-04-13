import type { Theme } from '../data'
import { Card, Utterances } from '../components/cards'

export function CommunityPage({ theme }: { theme: Theme }) {
  return (
    <section className="section container">
      <h1 className="h2">Community</h1>
      <p className="p">
        I’m building this into a small learning community for cybersecurity beginners. Ask questions, suggest writeups, and
        leave a message.
      </p>

      <div className="grid">
        <Card title="Start a discussion">
          Use GitHub Discussions for questions, feedback, and ideas. It keeps everything public and searchable for other
          learners.
          <div className="row">
            <a
              className="btn btn-ghost"
              href="https://github.com/silasmukabwa254-ux/silasmukabwa254-portfolio/discussions"
              target="_blank"
              rel="noreferrer"
            >
              Open Discussions
            </a>
          </div>
        </Card>

        <Card title="Suggest a writeup topic">
          If there’s a topic you want explained (DNS, Linux permissions, hashing, etc.), drop an idea as an issue.
          <div className="row">
            <a
              className="btn btn-ghost"
              href="https://github.com/silasmukabwa254-ux/silasmukabwa254-portfolio/issues/new?template=writeup-idea.md"
              target="_blank"
              rel="noreferrer"
            >
              Suggest a topic
            </a>
          </div>
        </Card>
      </div>

      <div className="community-embed">
        <h2 className="h3">Guestbook</h2>
        <p className="p">
          Leave a quick message. This uses GitHub issues for comments, so it works on GitHub Pages with no backend.
        </p>
        <Utterances theme={theme} />
      </div>
    </section>
  )
}

