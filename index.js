function introduction(name) {
return `Hi, my name is ${name}.`;
}
console.log (introduction("Johnny"));

function introductionWithLanguage(name,language)
{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log (introductionWithLanguage("Johnny","Javascript"));

function introductionWithLanguageOptional(name,language="Javascript")
{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log (introductionWithLanguageOptional("Johnny","Javascript"));

function introductionWithLanguageOptional(name,language="JavaScript")
{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log (introductionWithLanguageOptional("Johnny","JavaScript"));