function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
        // Data is invalid
        return -1;
    }
    let parts = transmission.trim().split("::");
    let rawData = parts[1];
    let id;
    if (Number(parts[0]) === "NaN") {
        id = -1;
    } else {
        id = Number(parts[0]);
    }
    if (rawData[0] !== "<" || rawData[rawData.length] !== ">" || rawData.split("").includes(">")
        || rawData.split("").includes("<")) {
        rawData = -1;
    }
    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;