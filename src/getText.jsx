export default ()=>{

const texts =[

"La psychosociologie peut être considérée comme science de l'action et pratique d'intervention engagée dans la vie sociale. Il s'agit d'un courant transdisciplinaire d'apparition récente qui rassemble des sociologues, des psychologues, des psychanalystes, des pédagogues. Elle puise ses sources théoriques dans les différents courants des sciences humaines, on peut citer entre autres influences : la psychologie sociale, la sociologie, la psychologie humaniste, la psychanalyse et le psychodrame. La cohérence interne de la psychosociologie n'exclut p..",
"Le recensement est une opération statistique de dénombrement d'une population. Le mot vient du latin recensere, qui signifie passer en revue. Les premiers recensements connus ont eu lieu dès l'Antiquité, notamment à Rome, dans le but de connaître la richesse du pays, afin de répartir l'impôt. Au XIXe siècle, les recensements ont également eu un rôle militaire, afin d'estimer l'effectif mobilisable. Aujourd'hui, les recensements sont surtout des outils d'aide à la prévision économique. Outre le nombre d'habitants, ils indiquent leur âge,",
"Le caractère quasi unique d'une empreinte digitale en fait un outil très utilisé pour l'identification des individus en médecine légale et pour la police scientifique. La probabilité pour que deux personnes aient la même empreinte digitale est très faible, même à l'échelle de la population humaine. On estime en effet à 1/64 milliards la probabilité pour que deux individus aient les mêmes empreintes digitales. Son caractère aléatoire s'affranchit des risques de ressemblances entre individus partageant un même patrimoine génétique"


];


return texts[Math.floor(Math.random()*texts.length)];
}