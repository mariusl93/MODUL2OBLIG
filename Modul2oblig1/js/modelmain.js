const model = {
    app: {
        currentPage: 'mainsite',
    },
        chosenTuning: 0,
        tunings: [
            { name: 'E Standard',  id: 1, /* tuning: true, */ buttons: ['E','A','D','G']},
            { name: 'Eb Standard', id: 2, /* tuning: false, */buttons: ['Eb','Ab','Db','Gb'],},
            { name: 'Drop D',      id: 3, /* tuning: false */buttons: ['D','A','D','G']},
        
        ],
        inputs:{
         newScaleName: '',
         newScaleTab: '',
         editingScaleName: '',
         editingScaleTab: ''
        },
        scales: [
            {id: 1, editing: false, scaleName: 'C Major', scaleTab:`G|———————————2—4—5||—5—4—2——————————|
D|—————2—3—5——————||———————5—3—2————|
A|—3—5————————————||—————————————5—3|
E|————————————————||————————————————|
            `,},
            {id: 2, editing: false, scaleName: 'C Minor', scaleTab:`G|—————————————3—5||—5—3————————————|
D|———————3—5—6————||—————6—5—3——————|
A|—3—5—6——————————||———————————6—5—3|
E|————————————————||————————————————|`,},

        ],

        
            
};      

/* model.tunings[model.chosenTuning] */