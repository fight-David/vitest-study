// test it
// expect toBe
// test.only
// 提示是否通过/报错
// beforeAll beforeEach afterEach afterAll
// describe
// 自动执行所有测试脚本 *.spec.js

const tests = []
const onlys = []
const beforeAlls = []
const afterAlls = []
const beforeEachs = []
const afterEachs = []
export function beforeAll(callback) {
    beforeAlls.push(callback)
}

export function afterAll(callback) {
    afterAlls.push(callback)
}

export function beforeEach(callback) {
    beforeEachs.push(callback)
}

export function afterEach(callback) {
    afterEachs.push(callback)
}


export function test(name, callback) {
    tests.push({ name, callback })
}

test.only = (name, callback) => {
    onlys.push({ name, callback })
}

export const it = test

export function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Expected ${actual} to be ${expected}`)
            } else {
                console.log('ok');
            }
        },
    }
}

export function describe(name, callback) {
    callback()
}

export function run() {
    for (const callback of beforeAlls) {
        callback()
    }

    const suit = onlys.length ? onlys : tests

    for (const test of suit) {
        for (const callback of beforeEachs) {
            callback()
        }
        try {
            test.callback()
            console.log(`✓ ${test.name}`);
        } catch (error) {
            console.log(`✕ ${error}`);
        }

        for (const callback of afterEachs) {
            callback()
        }
    }

    for (const callback of afterAlls) {
        callback()
    }
}
