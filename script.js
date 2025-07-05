const words = {
    a: {
        "4": ["adam", "adım", "asil", "ayna"],
        "5": ["afaki", "akran", "artık", "aslan"],
        "6": ["aferin", "asalak", "atomik", "azalan"]
    },
    b: {
        "4": ["baba", "baki", "bali", "balı"],
        "5": ["balık", "banka", "bahar", "barış"],
        "6": ["bahane", "bakmak", "başkan", "barbar"]
    },
    c: {
        "4": ["cami", "cana", "cari", "cenk"],
        "5": ["canlı", "cahil", "cızır", "cıvık"],
        "6": ["cezalı", "ceylan", "cömert", "cızlak"]
    },
    d: {
      "4": ["daha", "dali", "deli", "dolu"],
      "5": ["dolar", "davet", "dersi", "dilim"],
      "6": ["davran", "dizayn", "dostça", "durmak"]
    },
    e: {
      "4": ["eski", "eksi", "evet", "enik"],
      "5": ["erken", "etkin", "emlak", "evren"],
      "6": ["edebiy", "ekmekç", "eşyaçı", "etiket"]
    },
    f: {
      "4": ["fark", "fena", "fida", "fini"],
      "5": ["fidan", "fener", "ferah", "fikir"],
      "6": ["fasüly", "fatura", "felsef", "fırlat"]
    },
    g: {
      "4": ["gazi", "gönü", "gemi", "gözl"],
      "5": ["güler", "güven", "geniş", "güçlü"],
      "6": ["garanti", "gençlik", "güzellik", "görmek"]
    },
    h: {
      "4": ["hava", "hani", "hara", "hani"],
      "5": ["haber", "hakim", "hatır", "hayal"],
      "6": ["hazine", "hakaret", "hayvan", "halkçı"]
    },
    i: {
      "4": ["ilas", "ilir", "ince", "ivan"],
      "5": ["istem", "içmek", "isyan", "ileri"],
      "6": ["izleme", "işaret", "işlevi", "ilgili"]
    },
    j: {
      "4": ["java", "joke", "just", "jart"],
      "5": ["japon", "joker", "jeton", "jilet"],
      "6": ["jantlar", "jantlı", "jasper", "jargon"]
    },
    k: {
      "4": ["kapi", "kale", "koli", "kuru"],
      "5": ["kalem", "kazan", "kobra", "kıvan"],
      "6": ["kanatçı", "kavanoz", "kalacak", "kararlı"]
    },
    l: {
      "4": ["lale", "lama", "list", "lift"],
      "5": ["liste", "lamba", "liman", "lokal"],
      "6": ["laflar", "limoni", "lokanta", "lazımcı"]
    },
    m: {
      "4": ["masa", "mavi", "muta", "mala"],
      "5": ["makas", "meyve", "mutlu", "murat"],
      "6": ["makine", "maraton", "mektup", "mutfak"]
    },
    n: {
      "4": ["nane", "nahi", "nama", "nazi"],
      "5": ["namaz", "nakil", "narin", "nazik"],
      "6": ["namzet", "narinli", "nazaran", "nasihat"]
    },
    o: {
      "4": ["oğul", "olma", "oval", "okul"],
      "5": ["orman", "okyan", "onlar", "oynak"],
      "6": ["oklava", "oranda", "oynama", "olumlu"]
    },
    p: {
      "4": ["pala", "poli", "para", "puma"],
      "5": ["polis", "pasta", "palet", "patik"],
      "6": ["pancar", "pastör", "patika", "pilavcı"]
    },
    q: {
      "4": ["quiz", "quad", "quay", "quip"],
      "5": ["quilt", "quota", "queen", "quick"],
      "6": ["quiver", "quaint", "quarry", "quench"]
    },
    r: {
      "4": ["rüya", "riba", "rota", "rama"],
      "5": ["rakip", "rapor", "resim", "roman"],
      "6": ["rafine", "rüzgar", "reçine", "remont"]
    },
    s: {
      "4": ["sarı", "sahil", "sera", "sütü"],
      "5": ["sahil", "serin", "sınıf", "satır"],
      "6": ["sabırla", "sandalı", "seçmek", "susmak"]
    },
    t: {
      "4": ["tala", "taze", "tina", "tuna"],
      "5": ["takip", "tablo", "tatlı", "tanık"],
      "6": ["tabaka", "takvim", "tampon", "taslak"]
    },
    u: {
      "4": ["ulak", "umut", "ural", "uçak"],
      "5": ["ultra", "unut", "uçmak", "ufkum"],
      "6": ["umumi", "uğurlu", "ulusal", "umursak"]
    },
    v: {
      "4": ["vadi", "vazo", "veda", "vuru"],
      "5": ["varış", "vahşi", "vatan", "vahim"],
      "6": ["varmak", "vahşet", "vazife", "vicdan"]
    },
    y: {
      "4": ["yasa", "yeni", "yolu", "yani"],
      "5": ["yanar", "yazık", "yasal", "yatak"],
      "6": ["yazlık", "yaygın", "yavaşça", "yığın"]
    },
    z: {
      "4": ["zade", "zara", "zayi", "zoru"],
      "5": ["zaman", "zebra", "zengin", "zırva"],
      "6": ["zarfla", "zararlı", "zamana", "zincir"]
    }
}

let hak = 5

const wordsElement = document.getElementById("words")

const charLength = parseInt(prompt("Lütfen kelime sayısını giriniz: "))

if(charLength != 4 && charLength != 5 && charLength != 6){
  window.location.reload()
}

else{
    const mainForm = document.getElementById("main-form")

    let selectedChar = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]
    
    let selectedWord = words[selectedChar][charLength][0]
    
    for(let i = 0;i<5;i++){
        wordsElement.innerHTML += `<h1 id="word${i}">${"<span>_</span>".repeat(charLength)}</h1>`
    }

    Array.from(document.querySelectorAll("#words h1"))[0].children[0].textContent = selectedWord[0]
    
    document.getElementById("inputs-div").innerHTML = `<input type="text" maxlength="1">`.repeat(charLength)
    
    let sira = 0
    
    mainForm.addEventListener("submit",e => {
        e.preventDefault()

        const charsControl = Array.from(document.querySelectorAll("#inputs-div input")).map(input => input.value.trim() != "")
        const chars = Array.from(document.querySelectorAll("#inputs-div input")).map(input => input.value)

        if(charsControl.includes(false)){
          alert("Lütfen tüm kutucukları doldurunuz.")
          return;
        }

        if(chars.join("") == selectedWord){
          alert("Kazandın!")
          window.location.reload()
          return;
        }

        if(hak <= 1){
          alert("Hakkın bitti! cevap: "+selectedWord)
          window.location.reload()
        }
    
        lineProcess(sira,chars)
        sira++
        hak--

        document.getElementById("hak").textContent = hak.toString()
    })
    
    function lineProcess(line,chars){
        for(let i = 0;i<wordsElement.children[line].textContent.length;i++){
            if(chars[i] == selectedWord[i]){
                wordsElement.children[line].children[i].textContent = chars[i]
                wordsElement.children[line].children[i].style.backgroundColor = "green"
            }

            else if(selectedWord.indexOf(chars[i]) != -1 && !Array.from(wordsElement.children[line].children).filter(span => span.style.backgroundColor == "green").map(span => span.textContent).includes(chars[i])){
                wordsElement.children[line].children[i].textContent = chars[i]
                wordsElement.children[line].children[i].style.backgroundColor = "orange"
            }

            else if(chars[i] != selectedWord[i]){
                wordsElement.children[line].children[i].textContent = chars[i]
                wordsElement.children[line].children[i].style.backgroundColor = "red"
            }
        }
    }
}