//Database calls with sequlize orm for movie object

module.exports =function(sequelize, DataTypes){
    const ViewParty = sequelize.define("ViewParty",{
        OMDBId:{
            type: DataTypes.STRING,
            allowNull:false
        },
        roomName: {
            type: DataTypes.STRING,
            allowNull:false
        },
        viewerNumber: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        //Format year-month-day 2021-2-20
        viewDay: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate:true,
                contains:"/",
                len:[7,11],
                isValidYear(value) {
                    let year = parseInt(value.split("/")[2]);
                    
                    if(year<2021||year>9999){
                        throw new Error("Year must have 4 digits and be in the future");
                    }
                },
                isValidDay(value){
                    let day = parseInt(value.split("/")[1]);
                    
                    if(day<1||day>31){
                        throw new Error("Day must be between 1 and 31");
                    }
                },
                isValidMonth(value){
                    let month = parseInt(value.split("/")[0]);
                    
                    if(month<0||month>12){
                        throw new Error("Month must be between 12 and 1");
                    }
                }
            }
        },
        //Format militaryTime 13:30 => 1:30 pm
        viewTime :{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //isDecimal:true,
                len:[2,9],
                contains:":" ,

                isValidHour(value) {
                    let hour = parseInt(value.split(":")[0]);
                    
                    if(hour>23||hour<0){
                        throw new Error("Hour must be between 0 (inclusive) and 24 (exclusive)");
                    }
                },
                isValidMinute(value) {
                    let minute = parseInt(value.split(":")[1]);
                    
                    if(minute>59||minute<0){
                        throw new Error("Minute must be between 0 (inclusive) and 60 (exclusive)");
                    }
                }
            }
        }
    });

    ViewParty.associate= (models)=>{
        ViewParty.hasMany(models.Chat,{
            onDelete: 'cascade'
        });
    };

    return ViewParty;
}