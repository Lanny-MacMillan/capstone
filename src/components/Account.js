import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


const Account = (props) => {

    const { loading = false } = props;


    return (
        <>
                    Profile Page
        <div className='container'>
            <Card className='Card' sx={{ maxWidth: 450, m: 1 }}>
                    <CardHeader
                        avatar={
                        loading ? (
                            <Skeleton animation="wave" variant="circular" width={40} height={40} />
                        ) : (
                            <Avatar
                            alt='alt user img'
                            src='user image'
                            />
                        )
                        }
                        // action={
                        // loading ? null : (
                        //     <IconButton aria-label="settings">
                        //     <MoreVertIcon />
                        //     </IconButton>
                        // )
                        // }
                        title={
                        loading ? (
                            <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                            />
                        ) : (
                            <>
                            'user name'
                            </>
                        )
                        }
                        subheader={
                        loading ? (
                            <Skeleton animation="wave" height={10} width="40%" />
                        ) : (
                            <>
                            more info
                            </>
                        )
                        }
                    />
                    {loading ? (
                        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                    ) : (
                        <CardMedia
                        component="img"
                        height="140"
                        image='user image 2'
                        alt='alt user image 2'
                        />
                    )}
            
                    <CardContent>
                        {loading ? (
                        <React.Fragment>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </React.Fragment>
                        ) : (
                        <Typography variant="body2" color="text.secondary" component="p">
                            {
                                <>
                            'Some kind of user a askda;slkd;laksd ;lk;a lksd;laks;dlk;alskd mans,md,mas,mdna,msnd,asd, a,mnd amdakajh kjakjhak s'
                            <br/>
                            {/* <Button id='Button' variant="contained" onClick={() => {showPage(activity)}} className="btn btn-link" role="button">Expand</Button> */}

                                </>
                            }
                        </Typography>
                        
                        )}
                    </CardContent>
            </Card>
        </div>
        </>
    )
}
export default Account