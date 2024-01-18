// Constructor function for Student details
function student (name,roll_no,Class,section,marks_of_5_subjects) {

        this.name = name;
        this.roll_no = roll_no;
        this.Class = Class
        this.section = section
        this.marks_of_5_subjects = marks_of_5_subjects;

    // Function method to print top three subjects based on marks
    this.printTop3Subjects = () => {
        const shortedSubject = Object.keys(this.marks_of_5_subjects).sort((a,b)=>{
            return this.marks_of_5_subjects[b]-this.marks_of_5_subjects[a];
        })
        // Print the top three subjects
        console.log("Top 3 Subjects");
        for(let i =0;i<Math.min(3,shortedSubject); i++){
            console.log(`${i+1}, ${shortedSubject[i]}`);
        }
    };

    // Function method to print the report card
    this.printReportCard = () =>{
        console.log(`
        +----------------------------------+
        |             REPORT CARD          |
        +--------------------------.-------+
        |   Name            -   ${this.name}    |
        |   Roll no.        -   ${this.roll_no}         |
        |   Class           -   ${this.Class}          |
        |   Section         -   ${this.section}          |
        |   science         -   ${this.marks_of_5_subjects.science}         |
        |   maths           -   ${this.marks_of_5_subjects.maths}         |
        |   social_science  -   ${this.marks_of_5_subjects.social_science}         |
        |   english         -   ${this.marks_of_5_subjects.english}         |
        |   hindi           -   ${this.marks_of_5_subjects.hindi}         |`)
    // Calculate and print percentage
    const totalMarks = Object.values(this.marks_of_5_subjects).reduce((total, mark) => total + mark, 0);
    const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;
    console.log(`        | Percentage        -   ${percentage.toFixed(1)} %     |`);
    console.log("        +----------------------------------+");
    }
    
}

const student1 = new student("Huzaifa", 16, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});

student1.printReportCard();
