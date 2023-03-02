const parseEnv = () => {
    const envVariables = process.env;

    for (const variable in envVariables) {
        if (variable.startsWith("RSS_")) {
            console.log(`${variable}=${envVariables[variable]}`);
        }
    }
};

parseEnv();
