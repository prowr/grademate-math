<template>
    <div class="math-problems">
        <div ref="content">

            <!-- Addition Page -->
            <div class="problems-page" v-if="additions.length">
                <h2>Additions</h2>
                <div class="problem-row problem-header">
                    <div class="problem-column">-</div>
                    <div class="problem-column">A</div>
                    <div class="problem-column">B</div>
                    <div class="problem-column">C</div>
                    <div class="problem-column">D</div>
                    <div class="problem-column">E</div>
                    <div class="problem-column">F</div>
                    <div class="problem-column">G</div>
                    <div class="problem-column">H</div>
                    <div class="problem-column">I</div>
                    <div class="problem-column">J</div>
                </div>
                <div v-for="(row, rowIndex) in chunkArray(additions, 10)" :key="rowIndex" class="problem-row">
                    <div class="page-line">{{rowIndex + 1}}</div>
                    <div v-for="(problem, problemIndex) in row" :key="problemIndex" class="problem addition">
                        <div class="number">
                            {{ problem.num1 }}
                        </div>
                        <div class="number addend">
                            {{ problem.num2 }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Subtraction Page -->
            <div class="problems-page" v-if="subtractions.length">
                <h2>Subtractions</h2>
                <div class="problem-row problem-header">
                    <div class="problem-column">-</div>
                    <div class="problem-column">A</div>
                    <div class="problem-column">B</div>
                    <div class="problem-column">C</div>
                    <div class="problem-column">D</div>
                    <div class="problem-column">E</div>
                    <div class="problem-column">F</div>
                    <div class="problem-column">G</div>
                    <div class="problem-column">H</div>
                    <div class="problem-column">I</div>
                    <div class="problem-column">J</div>
                </div>
                <div v-for="(row, rowIndex) in chunkArray(subtractions, 10)" :key="rowIndex" class="problem-row">
                    <div class="page-line">{{rowIndex + 1}}</div>
                    <div v-for="(problem, problemIndex) in row" :key="problemIndex" class="problem subtraction">
                        <div class="number">
                            {{ problem.num1 }}
                        </div>
                        <div class="number subtrahend ">
                            {{ problem.num2 }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Results Page -->
            <div class="problems-page" v-if="additions.length || subtractions.length">
                <h3>Addition Results</h3>
                <div v-for="(row, rowIndex) in chunkArray(additions, 10)" :key="'add-result-' + rowIndex" class="problem-row row-result">
                    <div
                        v-for="(problem, problemIndex) in row"
                        :key="'add-result-' + problemIndex"
                        class="problem-result"
                    >
                        <div class="number">
                            {{ getResultLabel(rowIndex, problemIndex) }}. {{ problem.num1 + problem.num2 }}
                        </div>
                    </div>
                </div>
                <h3>Subtraction Results</h3>
                <div v-for="(row, rowIndex) in chunkArray(subtractions, 10)" :key="'sub-result-' + rowIndex" class="problem-row row-result">
                    <div
                        v-for="(problem, problemIndex) in row"
                        :key="'sub-result-' + problemIndex"
                        class="problem-result"
                    >
                        <div class="number">
                            {{ getResultLabel(rowIndex, problemIndex) }}. {{ problem.num1 - problem.num2 }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MathProblems',
    data() {
        return {
            additions: [],
            subtractions: []
        }
    },
    mounted() {
        this.generateProblems();
    },
    methods: {
        generateProblems() {
            this.additions = this.generateMathProblems('addition');
            this.subtractions = this.generateMathProblems('subtraction');
        },
        generateMathProblems(type) {
            const problems = [];
            for (let i = 0; i < 150; i++) {
                let num1 = Math.floor(Math.random() * 9999) + 1;
                let num2 = Math.floor(Math.random() * 9999) + 1;
                if (type === 'subtraction' && num1 < num2) {
                    [num1, num2] = [num2, num1];
                }
                problems.push({ num1, num2 });
            }
            return problems;
        },
        chunkArray(array, size) {
            const chunkedArr = [];
            for (let i = 0; i < array.length; i += size) {
                chunkedArr.push(array.slice(i, i + size));
            }
            return chunkedArr;
        },
        getResultLabel(rowIndex, problemIndex) {
            const letters = "ABCDEFGHIJ"; // Represent columns A-J
            return `${rowIndex + 1}.${letters[problemIndex]}`;
        }
    }
}
</script>

<style scoped>
.row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.problems-page {
    margin-bottom: 20px;
}

.problems-page h2 {
    margin-top: 0;
}

.problem-row {
    display: flex;
    width: 100%;
    gap: 25px;
    padding-bottom: 23px;
    margin-bottom: 25px;
}
.problem-row {
    font: normal normal normal 23px/23px "Source Code Pro", serif;
    display: flex;
    justify-content: space-between;
}
.row-result {
    margin-bottom: 0px;
    gap: 0;
    justify-content: space-between;
}
.row-result *{
    font: normal normal normal 15px/15px "Source Code Pro", serif;

}
.page-line{
    font: normal normal normal 23px/23px "Source Code Pro", serif;
    align-self: center;
}
.problem-column:first-child {width: 14px;gap: 25px;}
.problem-column{width: 70px;padding: 0 10px;display: flex;justify-content: center;}
.problem-header{margin-bottom: 5px;padding-bottom: 0;}
.problem {
    display: flex;
    width: 70px;
    justify-content: flex-end;
    padding: 0 10px;
    font-size: 20px;
}

.addition {
    display: flex;
    flex-flow: column;
    border-bottom: 2px solid black;
}

.subtraction {
    display: flex;
    flex-flow: column;
    border-bottom: 2px solid black;
}

.number {
    font: normal normal normal 15px/23px "Source Code Pro", serif;
    display: flex;
    justify-content: flex-end;
}

.addend,
.subtrahend {
    justify-content: space-between;
}

.addend:before {
    content: "+";
}

.subtrahend:before {
    content: "-";
}
</style>