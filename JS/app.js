const sintaxis = { "int": "let", "String": "let", "double": "let", "boolean": "let", "void": "", "class": "class", "for": "for", "while": "while", "if": "if", "else": "else", "System.out.println": "console.log", "new": "new", "this": "this", "{": "{", "}": "}", "else if": "else if", ";": ";"};
const convertir_lenguaje = (texto) => {
    if (!texto.trim()) return "Ingresa código Java válido.";
    const codigoJava = texto.split('\n').map(linea => {
        linea = linea.replace(/\b(public|static|void)\b/g, "");
        if (/\bmain\s*\(\s*String\[\]\s+args\s*\)/.test(linea)) {
            return linea.replace(/main\s*\(\s*String\[\]\s+args\s*\)/, 'main([] args)');}
        for (const palabra in sintaxis) {linea = linea.replace(new RegExp(`\\b${palabra}\\b`, 'g'), sintaxis[palabra]);}
        return linea.trim();
    });
    return codigoJava.join('\n') || "Ingresa código Java.";};
document.getElementById('limpiar').addEventListener('click', () => location.reload());
document.getElementById('convertir').addEventListener('click', () => {
    const entrada = document.getElementById('lenguaje-js').value;
    document.getElementById('lenguaje-php').textContent = convertir_lenguaje(entrada);});
document.getElementById('copiar').addEventListener('click', () => {
    const salida = document.getElementById('lenguaje-php').value.trim();
    if (!salida) return alert("No hay código para copiar.");
    navigator.clipboard.writeText(salida);
    document.getElementById('copiar').textContent = "Copiado";});