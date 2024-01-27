const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArgs = {};
  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace(/^--/, "");
    const propValue = args[i + 1];
    parsedArgs[propName] = propValue;
  }
  const outputString = Object.entries(parsedArgs)
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");

  console.log(outputString);
};

parseArgs();
