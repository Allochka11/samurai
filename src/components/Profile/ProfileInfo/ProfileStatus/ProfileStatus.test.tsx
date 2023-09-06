import React from "react";
import { create } from "react-test-renderer";
import { ProfileStatus } from "components/Profile/ProfileInfo/ProfileStatus/ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status={"it-kamasutra.com"} userId={1} updateStatus={() => {}} />);
    const root = component.root;
    const profileStatusInstance = root.findByType(ProfileStatus);
    expect(profileStatusInstance.props.status).toBe("it-kamasutra.com");
  });

  test("after creation span should be displayed", () => {
    const component = create(<ProfileStatus status={"it-kamasutra.com"} userId={1} updateStatus={() => {}} />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation input shouldn't be displayed", () => {
    const component = create(<ProfileStatus status={"it-kamasutra.com"} userId={1} updateStatus={() => {}} />);
    const root = component.root;
    const inputElements = root.findAllByType("input");

    expect(() => {
      const inputElements = root.findByType("input");
    }).toThrow();
    // expect(inputElements.length).toBe(0);
  });

  test("after creation span text should be correct", () => {
    const component = create(<ProfileStatus status={"it-kamasutra.com"} userId={1} updateStatus={() => {}} />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra.com");
  });
  test("shouldn't find span after doubleClick", () => {
    const component = create(<ProfileStatus status={"it-kamasutra.com"} userId={1} updateStatus={() => {}} />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    expect(() => {
      let searchSpan = root.findByType("span");
    }).toThrow();
  });
  test("input should be displayed in editMode", () => {
    const component = create(<ProfileStatus status={"it-kamasutra.com"} userId={1} updateStatus={() => {}} />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("it-kamasutra.com");
  });
});
