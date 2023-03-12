import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/material";
import { format } from "timeago.js";
import { useRouter } from "next/router";
import Link from "next/link";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogCard({ post }) {
  const router = useRouter();

  const [expanded, setExpanded] = React.useState(false);

  var creation = new Date(post.created.seconds * 1000);
  const formattedDate = creation.toLocaleDateString("en-IN");
  const formattedTime = creation.toLocaleString("en-IN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const newDate = `${formattedDate}`;

  return (
    <Stack p={2}>
      <Card sx={{ maxWidth: 270, height: 450 }}>
        <Link href={`/blog/${post.id}`} style={{ textDecoration: "none" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
            subheader={newDate}
            sx={{ height: 80 }}
          />
        </Link>
        <CardMedia
          component="img"
          height="194"
          image="/assets/post/1.jpeg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.desc.substring(0, 100) + "..."}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more">
            {/* <Link href={`/blog/${post.id}`}>
              <ExpandMoreIcon />
            </Link> */}
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>{"post.desc"}</Typography>
            {/* <Typography paragraph></Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography> */}
          </CardContent>
        </Collapse>
      </Card>
    </Stack>
  );
}
