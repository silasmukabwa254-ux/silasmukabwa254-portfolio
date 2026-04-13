import { writeups } from '../data'
import { Card, WriteupCard } from '../components/cards'

export function WriteupsPage() {
  return (
    <section className="section container">
      <h1 className="h2">Writeups</h1>
      <p className="p">Short posts that show security thinking and communication.</p>
      <div className="grid">
        {writeups.map((w) => (
          <WriteupCard key={w.title} writeup={w} />
        ))}
        <Card title="Learning log (ongoing)">TCP/IP, DNS, HTTP basics, plus labs and small scripts as I learn.</Card>
      </div>
    </section>
  )
}

