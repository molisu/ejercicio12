function fibona(num) {
    const res = [1, 1]

    for (let i = 2; i < num; i++) {
        res[i] = res[i - 1] + res[i - 2]
    }

    return res
}