import { EmailValidatorCard, FileIntegrityCard, PasswordStrengthCard, Sha256Card, TerminalCard } from '../components/cards'

export function DemosPage() {
  return (
    <section className="section container">
      <h1 className="h2">Interactive demos</h1>
      <p className="p">Small security-focused widgets that run entirely in your browser.</p>
      <div className="grid">
        <PasswordStrengthCard />
        <EmailValidatorCard />
        <Sha256Card />
        <FileIntegrityCard />
        <TerminalCard />
      </div>
    </section>
  )
}

