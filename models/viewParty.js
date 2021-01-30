//Database calls with sequlize orm for movie object

module.exports =function(sequelize, DataTypes){
    const ViewParty = sequelize.define("ViewParty",{
        OMDBId:{
            type: DataTypes.STRING,
            allowNull:false
        },
        socketId: {
            type: DataTypes.STRING,
            allowNull:false
        },
        viewerNumber: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        viewDay: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate:true
            }
        },
        //Format militaryTime 13:30 => 1:30 pm
        viewTime :{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDecimal:true,
                len:[3,5],
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