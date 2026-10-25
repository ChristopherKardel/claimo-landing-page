# Kontolöschung: Website und Betrieb

Die Website stellt eine Löschanfrage per E-Mail bereit. Sie benötigt weder einen Login noch die App, JavaScript oder einen Formulardienst. Die E-Mail wird vom Nutzer versendet; der Button selbst sendet nichts und löscht kein Konto.

## URL für Google Play

Nach Veröffentlichung dieses Checkouts:

- Deutsch: https://claimo-app.com/de/konto-loeschen.html
- Englisch / Standard: https://claimo-app.com/konto-loeschen.html
- Englische Sprachroute: https://claimo-app.com/en/konto-loeschen.html

In der Play Console im Formular **Datensicherheit** unter **App-Inhalte** den Weblink für die Beantragung der Konto- und Datenlöschung eintragen. Für den deutschen Eintrag die deutsche URL verwenden. Antworten zur Datenlöschung müssen dem tatsächlichen Verhalten des App-Backends entsprechen. Die separate Frage nach Datenlöschung ohne Kontoschließung nur entsprechend dem tatsächlich angebotenen Supportverfahren beantworten.

Die bestehende GitHub-Pages-Workflowdatei `.github/workflows/deploy.yml` veröffentlicht den Repository-Inhalt bei einem Push auf `main`. Die neuen Dateien benötigen keinen Build. Der aktuelle Arbeitsstand ist durch die lokale Implementierung allein noch nicht veröffentlicht. Nach der Veröffentlichung die öffentliche URL ohne Anmeldung prüfen und erst dann in der Play Console hinterlegen. Dieses Repository bietet keine Play-Console-Anbindung.

## Abstimmung mit bestehenden Rechtstexten

- Alle Footer verlinken auf die Löschseite in der jeweiligen Sprache; die Startseiten behalten ihre vorhandene Übersetzungslogik.
- Ziffer 11 der App-Nutzungsbedingungen beschreibt den bestehenden E-Mail-Weg und ergänzt den öffentlichen Link. Die bestehende Verfallregel für Gems/Tickets wurde nicht erweitert. Bereits entstandene, rechtlich durchsetzbare Ansprüche und zwingende gesetzliche Rechte bleiben geschützt. Der bestehende AGB-Versionsbezeichner bleibt erhalten, da die akzeptierte Vertragsversion auch im App-Backend verwendet werden kann; ein eigenständiger Versionswechsel muss mit der App abgestimmt werden.
- Ziffer 17 der App-Datenschutzerklärung erläutert die Kontolöschung, Antwortfristen, erforderliche Identitätsprüfung, Dienstleister und begrenzte Aufbewahrungsausnahmen; Stand/Version wurde aktualisiert.
- Die Website-Datenschutzerklärung berücksichtigt den neuen Anfrageweg und verweist für die eigentliche Kontolöschung auf den App-Datenschutz.

## Supportablauf, der tatsächlich sichergestellt werden muss

Empfänger ist die bereits in den App-Rechtstexten genannte Adresse **support@claimo-app.com**. Mailzustellung, Zugriff und laufende Bearbeitung sind außerhalb dieses statischen Repositories sicherzustellen. Es wurde keine Testnachricht an den Support gesendet.

1. Eingang und Frist dokumentieren. Die Antwortfrist beginnt mit Eingang der Anfrage, nicht erst nach einer internen Freigabe. Unverzüglich handeln und spätestens innerhalb eines Monats über die Maßnahmen informieren. Eine notwendige Verlängerung wegen Komplexität oder Anzahl der Anträge um bis zu zwei weitere Monate innerhalb des ersten Monats begründen.
2. Konto sicher zuordnen. Möglichst die hinterlegte Konto-Adresse verwenden; verlorenen Zugriff über einen angemessenen alternativen Nachweis behandeln. Zusätzliche Identitätsdaten nur bei begründeten Zweifeln und nur soweit erforderlich anfordern. Keine routinemäßige Ausweiskopie oder Passwortabfrage.
3. Bestehende Auszahlungsansprüche klären. Eine Auszahlung oder Guthabeneinlösung nicht zur Voraussetzung für die Löschanfrage machen. Nur tatsächlich erforderliche Einzelunterlagen zu offenen Vorgängen weiter aufbewahren; übrige Daten fristgerecht löschen.
4. Konto samt personenbezogenen Daten tatsächlich löschen, einschließlich Authentifizierung, Profil, Wallet/Rewards, Referrals, Offerwall-Rückmeldungen, Auszahlungsdaten, Push-Token/Logs, Einstellungen, Supportdaten und zuordenbarer Sicherheitsdaten, soweit keine konkrete rechtmäßige Ausnahme greift. Eine bloße Sperre oder Pseudonymisierung genügt nicht. Löschung bei Auftragsverarbeitern veranlassen; andere Empfänger nach Art. 19 DSGVO informieren. Eigenverantwortliche Partnerverarbeitungen gesondert berücksichtigen.
5. Jede Ausnahme mit Datenumfang, Rechtsgrundlage, Zweck und Frist bzw. Löschkriterium dokumentieren. Steuerliche Fristen gelten nur für die entsprechend einzuordnenden Unterlagen, nicht für das vollständige Nutzerkonto. Restdaten zweckgebunden beschränken, regelmäßig prüfen und nach Wegfall der Gründe löschen.
6. Ergebnis per E-Mail bestätigen. Verbleibende Daten, Begründung und Löschzeitpunkt bzw. Kriterien konkret nennen. Bei einer vollständigen oder teilweisen Ablehnung Gründe, Aufsichtsbeschwerde und gerichtlichen Rechtsschutz erläutern.

## Noch nicht festgelegte betriebliche Fristen

Der Betreiber hat bestätigt, dass feste Fristen für Backups und Betrugspräventionsdaten noch nicht festgelegt sind. Deshalb nennt die Website keine erfundenen Tagesfristen. Sie beschreibt die Erforderlichkeitskriterien und die Information im Einzelfall. Die Website allein etabliert keinen technischen Löschprozess.

Für den produktiven Betrieb sind insbesondere Backup-Aufbewahrung, Löschdurchlauf, Umgang mit einer Wiederherstellung sowie eine begrenzte Aufbewahrung konkreter Betrugsnachweise im Backend festzulegen und zu dokumentieren. Gelöschte Kontodaten dürfen nach einer Wiederherstellung nicht wieder aktiv verwendet werden. Sobald belastbare Fristen feststehen, Website und App-Datenschutz entsprechend präzisieren. Die in diesem Repo nicht enthaltene In-App-Löschmöglichkeit muss ebenfalls geprüft werden; ein leicht auffindbarer Link aus der App auf die Webressource kann nach den Google-Vorgaben genügen.

## Geprüfte Primärquellen

- [Google Play: Anforderungen zur Kontolöschung](https://support.google.com/googleplay/android-developer/answer/13327111?hl=de): externer Anfrageweg, E-Mail als zulässiger Weg, App-/Entwicklername, Konto und zugehörige Daten, Erreichbarkeit ohne App, Aufbewahrungsausnahmen und Dienstleister.
- [DSGVO, insbesondere Art. 5, 6, 12, 13, 17 und 19](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng): Datenminimierung, Rechtsgrundlagen, Fristen, Identitätsprüfung, Löschrecht und Empfängerinformation.
- [§ 147 AO](https://www.gesetze-im-internet.de/ao_1977/__147.html) und [§ 257 HGB](https://www.gesetze-im-internet.de/hgb/__257.html): nach Unterlagenart differenzierte Aufbewahrung und Fristbeginn.

Stand der Quellenprüfung und Umsetzung: 15. Oktober 2026. Eine technische Prüfung des App-Backends oder eine vollständige rechtliche Prüfung aller bestehenden AGB-Klauseln ist damit nicht verbunden.
