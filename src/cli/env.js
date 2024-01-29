const parseEnv = () => {
    const envArr = Object.entries(process.env);
    const result = envArr.reduce((result, curEnv)=> {
        if (curEnv[0].startsWith('RSS_')) {
            return [
                ...result,
                `${curEnv[0]}=${curEnv[1]}`
            ];
        }
        return result;
    }, []);
    console.log(result.join('; '));
};

parseEnv();