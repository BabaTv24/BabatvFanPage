# Jak Skonfigurować Panel Administratora BABATV24

## Krok 1: Ustaw Hasło Administratora

**WAŻNE:** Panel administratora wymaga ustawienia hasła w zmiennych środowiskowych.

### W Replit:

1. Kliknij w zakładkę **"Secrets"** (po lewej stronie, ikona kłódki)
2. Kliknij **"New Secret"**
3. Wpisz:
   - **Key (Klucz):** `ADMIN_PASSWORD`
   - **Value (Wartość):** Twoje bezpieczne hasło (np. `Moje$ilneHaslo123!`)
4. Kliknij **"Add Secret"**
5. **Zrestartuj aplikację** (zatrzymaj i uruchom ponownie)

## Krok 2: Zaloguj się do Panelu

1. Wejdź na stronę: `https://[twoja-aplikacja].replit.app/admin/login`
2. Wpisz hasło które ustawiłeś w Secrets
3. Kliknij **"Zaloguj się"**
4. Zostaniesz przekierowany na `/admin` - Panel Administratora

## Krok 3: Zarządzaj Aplikacją

Teraz możesz:
- ✅ Przeglądać statystyki (przychód, transakcje, użytkownicy)
- ✅ Zarządzać reklamami (dodawać, edytować, usuwać)
- ✅ Zarządzać opiniami użytkowników
- ✅ Zarządzać klipami wideo

---

## Wskazówki Bezpieczeństwa

### Silne Hasło
Użyj hasła które:
- Ma minimum 12 znaków
- Zawiera wielkie i małe litery
- Zawiera cyfry i znaki specjalne
- NIE jest łatwe do zgadnięcia

### Przykłady DOBRYCH haseł:
- ✅ `BabaTv$2024!Secure`
- ✅ `Admin@#Str0ng2024`
- ✅ `MyP@ssw0rd2024!BTV`

### Przykłady ZŁYCH haseł:
- ❌ `admin123`
- ❌ `password`
- ❌ `babatv24`

---

## Problemy?

### "Panel administratora nie jest skonfigurowany"
**Rozwiązanie:** Nie ustawiłeś ADMIN_PASSWORD w Secrets. Zobacz Krok 1 powyżej.

### "Nieprawidłowe hasło"
**Rozwiązanie:** Wpisałeś złe hasło. Sprawdź czy ADMIN_PASSWORD w Secrets jest takie samo jak to które wpisujesz.

### "Zbyt wiele prób logowania"
**Rozwiązanie:** Za dużo razy wpisałeś złe hasło. Poczekaj 15 minut i spróbuj ponownie.

---

## Zmiana Hasła

1. Wejdź do zakładki **"Secrets"**
2. Znajdź `ADMIN_PASSWORD`
3. Kliknij ikonę ołówka (edytuj)
4. Wpisz nowe hasło
5. Kliknij **"Save"**
6. Zrestartuj aplikację

---

**Wersja:** 1.0  
**Data:** 14 listopada 2024
