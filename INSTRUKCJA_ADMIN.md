# Panel Administratora BABATV24 - Instrukcja Obsługi

## Spis Treści
1. [Jak się zalogować](#jak-się-zalogować)
2. [Nadawanie uprawnień administratora](#nadawanie-uprawnień-administratora)
3. [Przegląd Panelu](#przegląd-panelu)
4. [Statystyki](#statystyki)
5. [Zarządzanie Użytkownikami](#zarządzanie-użytkownikami)
6. [Zarządzanie Reklamami](#zarządzanie-reklamami)
7. [Zarządzanie Opiniami](#zarządzanie-opiniami)
8. [Zarządzanie Klipami Wideo](#zarządzanie-klipami-wideo)
9. [Najczęstsze Problemy](#najczęstsze-problemy)

---

## Jak się zalogować

1. Wejdź na stronę główną: [https://babatv24.replit.app](/)
2. Kliknij przycisk **"Zaloguj się"** w prawym górnym rogu
3. Zaloguj się przez Replit (możesz użyć konta Google)
4. Po zalogowaniu, w pasku adresu wpisz: `/admin`

**UWAGA**: Panel administratora zobaczysz tylko jeśli masz uprawnienia administratora lub moderatora!

---

## Nadawanie Uprawnień Administratora

Aby ktoś mógł zobaczyć Panel Administratora, musi mieć odpowiednią rolę w bazie danych.

### Jak nadać uprawnienia (dla głównego administratora):

1. Wejdź do bazy danych (zakładka "Database" w Replit)
2. Znajdź użytkownika po adresie email
3. Zmień pole `role` na:
   - **ADMIN** - pełny dostęp do wszystkiego
   - **EDITOR** - dostęp do zarządzania treścią (reklamy, opinie, klipy)
   - **USER** - zwykły użytkownik (bez dostępu do panelu)

### Przykładowe zapytanie SQL:
```sql
UPDATE users 
SET role = 'ADMIN' 
WHERE email = 'twoj-email@example.com';
```

---

## Przegląd Panelu

Po wejściu do panelu administratora (`/admin`) zobaczysz:

### Górna część ekranu:
- **4 kafelki ze statystykami** (przychód, transakcje, konwersja, użytkownicy)

### Środek ekranu:
- **4 zakładki** do zarządzania:
  1. Użytkownicy
  2. Reklamy
  3. Opinie
  4. Klipy

---

## Statystyki

### 1. Dzienny Przychód (€)
- Pokazuje ile zarobiłeś **dzisiaj**
- Liczba w euro (np. 99.00 €)

### 2. Transakcje
- Ile osób **dzisiaj** zapłaciło za dostęp
- Każda płatność = 1 transakcja

### 3. Konwersja (%)
- Jaki procent odwiedzających **kupiło dostęp**
- Im wyższy %, tym lepiej działa strona

### 4. Aktywni Użytkownicy
- Ile osób **ma teraz dostęp** do streamingu
- Osoby z ważną subskrypcją Entry lub PRO

---

## Zarządzanie Użytkownikami

### Co możesz zrobić:
1. **Zobaczyć listę wszystkich użytkowników**
   - Email
   - Data rejestracji
   - Status dostępu (czy ma aktywną subskrypcję)
   - Ile osób polecił

2. **Sprawdzić szczegóły użytkownika**
   - Numer ID (7-cyfrowy)
   - Kod polecający
   - Historia płatności
   - Lista poleconych osób

3. **Filtrować użytkowników**
   - Wszyscy
   - Tylko z aktywnym dostępem
   - Tylko VIP (dużo poleceń)

### Typowe akcje:
- **Sprawdzenie top polecających**: Zobacz kto poleca najwięcej osób
- **Weryfikacja płatności**: Sprawdź kto zapłacił i kiedy wygasa dostęp
- **Kontakt z użytkownikami**: Masz dostęp do emaili w razie problemów

---

## Zarządzanie Reklamami

### O co chodzi:
Na stronie głównej jest **pasek przewijający** z reklamami (25 miejsc).

### Co możesz zrobić:

1. **Dodać nową reklamę**
   - Kliknij "Dodaj reklamę"
   - Wpisz numer pozycji (1-25)
   - Wpisz tekst reklamy (krótki, chwytliwy)
   - Zaznacz "Aktywna" jeśli ma się wyświetlać

2. **Edytować istniejącą reklamę**
   - Kliknij ikonę ołówka przy reklamie
   - Zmień tekst
   - Zapisz

3. **Ukryć/pokazać reklamę**
   - Odznacz "Aktywna" żeby ukryć
   - Zaznacz "Aktywna" żeby pokazać

4. **Usunąć reklamę**
   - Kliknij ikonę kosza
   - Potwierdź usunięcie

### Przykłady dobrych reklam:
- ✅ "Sprawdź naszą ofertę! Najlepsze ceny 🔥"
- ✅ "Dołącz do 10,000+ zadowolonych użytkowników!"
- ❌ "Lorem ipsum dolor sit amet..." (za długie)

---

## Zarządzanie Opiniami

### O co chodzi:
Na stronie głównej wyświetla się **karuzela z opiniami** użytkowników.

### Co możesz zrobić:

1. **Dodać nową opinię**
   - Kliknij "Dodaj opinię"
   - Wpisz imię użytkownika
   - Dodaj link do zdjęcia profilowego (avatar)
   - Wybierz ocenę (1-5 gwiazdek)
   - Wpisz tekst opinii (max 140 znaków)
   - Zaznacz "Aktywna"

2. **Edytować opinię**
   - Kliknij ikonę ołówka
   - Zmień tekst lub ocenę
   - Zapisz

3. **Ukryć/pokazać opinię**
   - Odznacz "Aktywna" żeby ukryć
   - Zaznacz "Aktywna" żeby pokazać

4. **Usunąć opinię**
   - Kliknij ikonę kosza
   - Potwierdź

### Przykłady dobrych opinii:
- ✅ "Super jakość! Polecam każdemu 💯" - Anna K.
- ✅ "Działa płynnie, zero problemów" - Marek Z.
- ❌ "To jest najlepszy serwis na świecie który kiedykolwiek..." (za długie)

### Wskazówki:
- **Krótko i konkretnie** (max 140 znaków)
- **Prawdziwe wrażenia** (nie kopiuj opinii 1:1)
- **Różnorodność** (różne imiona, różne treści)

---

## Zarządzanie Klipami Wideo

### O co chodzi:
Na stronie głównej wyświetla się **monitor TV** z automatycznym odtwarzaniem klipów w pętli.

### Co możesz zrobić:

1. **Dodać nowy klip**
   - Kliknij "Dodaj klip"
   - Wpisz tytuł (np. "Zwiastun 1")
   - Wklej URL do filmu (HLS lub MP4)
   - Ustaw długość w sekundach (np. 45)
   - Wybierz kolejność wyświetlania
   - Zaznacz "Aktywna"

2. **Zmienić kolejność klipów**
   - Edytuj klip
   - Zmień pole "Kolejność" (1, 2, 3, ...)
   - Klipy odtwarzają się od najmniejszej liczby

3. **Ukryć/pokazać klip**
   - Odznacz "Aktywna" żeby ukryć
   - Tylko aktywne klipy są odtwarzane

4. **Usunąć klip**
   - Kliknij ikonę kosza
   - Potwierdź

### Formaty wideo:
- **HLS (.m3u8)** - polecane, adaptacyjna jakość
- **MP4** - działa, ale stała jakość

### Gdzie wziąć filmy:
1. Własne nagrania (upload do hostingu wideo)
2. Bunny.net, Cloudflare Stream, AWS S3
3. YouTube (przez konwerter do HLS)

---

## Najczęstsze Problemy

### Problem: "Nie widzę Panelu Administratora"

**Rozwiązanie:**
1. Sprawdź czy jesteś zalogowany (prawy górny róg)
2. Wpisz w pasku adresu: `/admin`
3. Jeśli widzisz błąd "Brak dostępu":
   - Twoje konto nie ma uprawnień administratora
   - Poproś głównego admina o nadanie roli ADMIN

---

### Problem: "Statystyki pokazują 0"

**Rozwiązanie:**
- To **normalne** jeśli nikt jeszcze nie kupił dostępu
- Statystyki aktualizują się na żywo
- Dzienny przychód = tylko dzisiejsze transakcje

---

### Problem: "Nie mogę edytować reklam/opinii/klipów"

**Rozwiązanie:**
1. Sprawdź czy masz rolę ADMIN lub EDITOR
2. Odśwież stronę (F5)
3. Wyloguj się i zaloguj ponownie
4. Jeśli nadal nie działa - zgłoś problem technicznemu

---

### Problem: "Dodałem klip ale się nie wyświetla"

**Rozwiązanie:**
1. Sprawdź czy zaznaczyłeś "Aktywna"
2. Sprawdź URL do filmu (czy jest poprawny)
3. Odśwież stronę główną (/)
4. Sprawdź konsolę przeglądarki (F12) - może być błąd ładowania

---

### Problem: "Jak usunąć użytkownika?"

**Odpowiedź:**
- **Na razie nie ma tej funkcji** w panelu
- Użytkownicy mogą się sami wyrejestrować
- Jeśli musisz kogoś usunąć - zrób to przez bazę danych
- Lub napisz do wsparcia technicznego

---

## Skróty Klawiszowe

Brak specjalnych skrótów - wszystko obsługujesz myszką.

---

## Bezpieczeństwo

### Ważne zasady:

1. **Nie udostępniaj swojego konta**
   - Login i hasło trzymaj dla siebie
   - Każdy admin powinien mieć własne konto

2. **Sprawdzaj przed usunięciem**
   - Usunięcie reklamy/opinii/klipu jest **trwałe**
   - Nie ma "cofnij" - uważaj!

3. **Regularnie sprawdzaj statystyki**
   - Codziennie zerknij na przychód
   - Monitoruj konwersję (czy rośnie)

4. **Nie zmieniaj kluczowych ustawień**
   - Nie usuwaj wszystkich reklam/opinii naraz
   - Zawsze zostawiaj przynajmniej kilka aktywnych

---

## Wsparcie Techniczne

Jeśli coś nie działa lub masz pytania:

1. Sprawdź tę instrukcję ponownie
2. Odśwież stronę i spróbuj jeszcze raz
3. Wyloguj się i zaloguj ponownie
4. Napisz do głównego administratora

---

## Słowniczek

- **Konwersja** = Ile % odwiedzających kupiło dostęp
- **Aktywna** = Wyświetla się na stronie (przeciwieństwo: ukryta)
- **HLS** = Format wideo, który dostosowuje jakość do internetu
- **Ref code** = Kod polecający (każdy użytkownik ma unikalny)
- **Entry** = Podstawowy dostęp za 0.99€ na 30 dni
- **PRO** = Premium dostęp za 12.99€/miesiąc
- **UTM** = Śledzenie skąd przyszedł użytkownik (np. z reklamy)

---

**Wersja instrukcji:** 1.0  
**Data ostatniej aktualizacji:** 14 listopada 2024  
**Język:** Polski
