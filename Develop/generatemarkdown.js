function generateMarkdown (answers) {
    const readMeData = `#${project}
    
    ##Github Username and email
    * ${username}
    * ${email}
    
    ##Description
    * ${description}

    ##license
    * ${license}

    ##Instructions
    * ${isntall}
    * ${test}
    * ${usage}
    * ${repo}
    `;
    return readMeData;
}