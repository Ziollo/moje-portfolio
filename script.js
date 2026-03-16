function pokazEmail(element) {
    // Zmienia tekst na adres e-mail
    element.innerText = "kacperziolek288@gmail.com";
    
    // Dodaje klasę, która trzyma styl i czcionkę
    element.classList.add("email-active");
    
    // Usuwamy stare klasy, które mogłyby się gryźć (opcjonalnie)
    element.classList.remove("email-btn"); 
}