import React from "react";
import Card from "react-bootstrap/Card";

function GitHubCard({ userData }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={userData.avatar_url} alt="profile" />
        <Card.Body>
          <Card.Title>{userData.login}</Card.Title>
          <Card.Text>
            <a href={userData.html_url} target="blank">
              Profile
            </a>
            {userData.bio && <p>Bio: {userData.bio}</p>}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;
