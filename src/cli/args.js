const parseArgs = () => {
    const args = process.argv;
    const result = args.reduce((result, arg, i) => {
        if (arg.startsWith('--')) {
            return [
                ...result,
                `${arg.slice(2)} is ${args[i+1]}`
            ];
        }
        return result;
    }, []);
    console.log(result.join(', '));
};

parseArgs();