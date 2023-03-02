const parseArgs = () => {
    const commandLineArg = process.argv;

    commandLineArg.forEach((item, index, array) => {
        if (item.startsWith("--")) {
            console.log(`${item} is ${array[index + 1]}`)
        }
    });
};

parseArgs();