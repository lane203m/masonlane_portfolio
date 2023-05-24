import React from 'react';
import { ReactElement } from 'react';
import { TextModal } from '../../../components/TextModal/TextModal';

interface ContactProps {
}

export const Contact = ({
  ...props
}: ContactProps): ReactElement => {
  return (
    <TextModal label='About Me'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie, enim eu egestas tincidunt, ligula metus congue justo, vestibulum ornare ex urna ut magna. Nulla vitae odio tellus. Aliquam aliquet vehicula ligula, vitae tincidunt nisl hendrerit eget. Donec nisi ante, elementum id elementum eget, mollis sit amet diam. Morbi interdum vehicula elit, sed volutpat ex euismod et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nibh velit, ullamcorper id convallis id, hendrerit vitae ante.

Curabitur magna diam, scelerisque quis sodales eu, consequat eu tortor. Cras tincidunt aliquam finibus. Phasellus enim dui, sagittis sit amet massa nec, ultrices ullamcorper lacus. Suspendisse ac risus pharetra, pharetra magna ut, hendrerit sapien. Suspendisse lorem lectus, commodo quis dictum et, auctor sit amet est. Mauris imperdiet venenatis augue nec feugiat. Quisque ac metus nulla. Morbi sed massa eu nisi gravida hendrerit.

Donec in lacus vel nunc fringilla dignissim in sit amet orci. Phasellus eu sem quis justo fermentum scelerisque vitae quis est. Nunc dictum magna non ligula maximus viverra. Nunc in euismod dolor. Etiam a porta est, sed placerat mauris. Vivamus auctor lacinia lorem, sed lacinia ante fringilla vitae. Duis maximus lobortis porttitor. Curabitur elit arcu, congue quis velit sed, viverra volutpat lectus. In ut orci euismod, tincidunt mi sed, ultricies risus. Nullam vitae ornare elit. Ut eget leo mauris. Nam in ultrices justo, sit amet tristique tortor. Mauris non ex nunc. Duis ornare erat at venenatis molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Ut laoreet, massa in mollis posuere, dolor quam semper arcu, sit amet suscipit erat massa congue enim. Integer vehicula congue nisl consectetur facilisis. Proin aliquam nulla metus, ut pulvinar sem suscipit sed. Sed vehicula nibh faucibus ante fringilla vehicula. Aenean auctor sed lorem et aliquam. Mauris massa lorem, dignissim eu magna eu, tristique lobortis eros. Praesent consequat nec mauris eu dapibus. Sed faucibus pulvinar lorem, eu dictum ex molestie sed. Phasellus hendrerit quam a sem semper scelerisque. Mauris ipsum mauris, aliquam quis auctor a, consequat eu magna. Quisque mollis risus non nibh luctus gravida. Etiam quis blandit risus.

Vivamus accumsan interdum enim eget dapibus. Duis neque augue, dapibus ac diam sed, congue lacinia ex. Integer enim sem, lobortis vel ipsum vitae, tempus lobortis mauris. Curabitur accumsan vehicula pretium. Pellentesque sit amet massa quis massa commodo pulvinar. Pellentesque consequat lacinia tellus, nec hendrerit nisi placerat quis. Maecenas dignissim, est ac tempor mollis, ante est iaculis sem, ut fermentum ex nulla vitae augue. Quisque placerat odio orci, a maximus mauris egestas ut. Donec vitae tincidunt ante. Sed et mi tortor.
    </TextModal>
  );
};