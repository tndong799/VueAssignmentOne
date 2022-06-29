let listBusinessAccount = [
    {
        id: 255697,
        name: 'Account 1'
    },
    {
        id: 582235,
        name: 'Account 2'
    },
    {
        id: 9789564,
        name: 'Account 3'
    },
    {
        id: 524756,
        name: 'Account 4'
    }
];

let listPixelAccount = [
    {
        id: 1,
        parentId: 255697,
        name: 'Pixel 1'
    },
    {
        id: 2,
        parentId: 582235,
        name: 'Pixel 2'
    },
    {
        id: 3,
        parentId: 582235,
        name: 'Pixel 3'
    },
    {
        id: 4,
        parentId: 255697,
        name: 'Pixel 4'
    },
    {
        id: 5,
        parentId: 9789564,
        name: 'Pixel 5'
    },
    {
        id: 6,
        parentId: 255697,
        name: 'Pixel 6'
    },
    {
        id: 7,
        parentId: 582235,
        name: 'Pixel 7'
    },
    {
        id: 8,
        parentId: 9789564,
        name: 'Pixel 8'
    },
    {
        id: 9,
        parentId: 255697,
        name: 'Pixel 9'
    },
    {
        id: 10,
        parentId: 582235,
        name: 'Pixel 10'
    },
    {
        id: 11,
        parentId: 9789564,
        name: 'Pixel 11'
    },
    {
        id: 12,
        parentId: 255697,
        name: 'Pixel 12'
    }
]



var app = new Vue ({
    el: '#app',
    data: {
        activeTab: 'auto_input_pixel',
        listBusinessAccount,
        listPixelAccount,
        businessAccount : '',
        isMissingPixel : false,
        targetAutoForm: '',
        isConvertApiAutoForm: false,
        isConvertApiManualForm: false,
        namePixel : '',
        idPixel: '',
        targetManualForm: '',
        errors: []
    },
    methods: {
        setActiveTab(tab){
            this.activeTab = tab
        },
        isActiveTab(tab){
            return this.activeTab === tab
        },
        handleChangeBusinessAccount(e){
            this.businessAccount = e.target.value
        },
        clearAutoForm(e){
            this.businessAccount = '',
            this.targetAutoForm = '',
            this.isConvertApiAutoForm = false
        },
        clearManualForm(e){
            this.namePixel = '',
            this.idPixel = '',
            this.targetManualForm = '',
            this.isConvertApiManualForm = false
        },
        handleSubmitManualForm(e){
            this.errors = []

            if(this.namePixel === ''){
                this.errors.push({
                    field: 'namePixel',
                    message: 'Name this pixel is required.'
                })
            }else if(!/^([^0-9]*)$/.test(this.namePixel)){
                // Cho phép ký tự và khoảng trắng
                this.errors.push({
                    field: 'namePixel',
                    message: 'Name this pixel not allow numbers.'
                })
            }
            if(this.idPixel === ''){
                this.errors.push({
                    field: 'idPixel',
                    message: 'Facebook pixel id is required.'
                })
            }else if(!/^\d+$/.test(this.idPixel)){
                this.errors.push({
                    field: 'idPixel',
                    message: 'Facebook pixel id is only number.'
                })
            }
            if(this.errors.length === 0){
                // submit manual form
            }
        },
        handleSubmitAutoForm(e){
            // submit auto form
        }
    },
    computed: {
        handleSelectPixel(){
            return this.businessAccount === ''
        },
        getAccountPixel(){
            if(this.businessAccount){
                let pixelAcounts = this.listPixelAccount.filter((acc) => acc.parentId == this.businessAccount)

                if(pixelAcounts.length === 0){
                    this.isMissingPixel = true
                }else{
                    this.isMissingPixel = false
                }
                return pixelAcounts
            }
            this.isMissingPixel = false
            return []
        },
        showErrorNamePixel(){
            return this.errors.filter(err => err.field === 'namePixel')
        },
        showErrorIdPixel(){
            return this.errors.filter(err => err.field === 'idPixel')
        }
    }
})
