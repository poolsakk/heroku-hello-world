function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    let i = 1;
    while(true) {
        console.log(`Hello Heroku ${i}`);
        await sleep(10000)
        i++
    }
}

main()