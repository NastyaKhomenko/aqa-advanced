function divide(numerator, denominator) {
    if (typeof numerator !== "number" || Number.isNaN(numerator)) {
        throw new TypeError(`Некоректний аргумент numerator: очікується число, отримано ${typeof numerator} (${numerator})`);
    }

    if (typeof denominator !== "number" || Number.isNaN(denominator)) {
        throw new TypeError(`Некоректний аргумент denominator: очікується число, отримано ${typeof denominator} (${denominator})`);
    }

    if (denominator === 0) {
        throw new RangeError("Ділення на нуль неможливе: denominator не може дорівнювати 0");
    }

    return numerator / denominator;
}

try {
    console.log(divide(10, 2));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(-7, 2));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(5, 0));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide("abc", 3));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(8, "4"));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(NaN, 2));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
} finally {
    console.log("Робота завершена");
}