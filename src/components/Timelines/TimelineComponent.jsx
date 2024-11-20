import { Timeline } from 'flowbite-react';

const TimelineComponent = () => {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>2 hrs ago</Timeline.Time>
          <Timeline.Title>admin_branch has updated</Timeline.Title>
          <Timeline.Body>Harry Handoko - Contact | MYCRM</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>2 hrs ago</Timeline.Time>
          <Timeline.Title>admin_branch has updated</Timeline.Title>
          <Timeline.Body>Harry Handoko - Application | MYCRM</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>4 hrs ago</Timeline.Time>
          <Timeline.Title>admin_branch has updated</Timeline.Title>
          <Timeline.Body>Harry Handoko - Application | MYCRM</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>4 hrs ago</Timeline.Time>
          <Timeline.Title>admin_branch has updated</Timeline.Title>
          <Timeline.Body>Harry Handoko - Contact | MYCRM</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default TimelineComponent;
