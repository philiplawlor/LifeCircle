function Colors(props) {
  return (
    <Page>
      <Section>
        <Text>Thank you for using <Text bold>LifeCircle</Text> </Text>
      </Section>
      
      <Section title={<Text bold align="center">Contact</Text>}>
        <Text>
          Contact info <Link source='https://twitter.com/gbysec' bold>Twitter </Link>
        </Text> 
      </Section>
      
      <Section title={<Text bold align="center">About</Text>}>
        <Text>
          This project would not have been possible without the opensource Fitbit watchface <Link source='https://github.com/robro/FitbitArcs' bold> FitbitArcs </Link> by robro.
          I would also like to thank the opensource Fitbit library <Link source='https://github.com/gregoiresage/fitbit-weather' bold> fitbit-weather </Link> by gregoiresage.
        </Text>

        <Text>
          This project will be open sourced on <Link source='xxxxxxxxxxxxxxxxxxx' bold>GitHub.</Link>
          You can ask there for a new feature or report an issue.
        </Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(Colors);

// To change B&W colors, auto rainbow, colored