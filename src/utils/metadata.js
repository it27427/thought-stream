export const generatePageMetadata = (pageTitle) => {
  const baseTitle = '%s - ThoughtStream | Unleashing the Power of Thought.';

  return {
    title: baseTitle.replace('%s', pageTitle),
    description: `ThoughtStream is your gateway to innovative thinking and creative solutions. 
                We connect ideas, spark inspiration, and empower minds to flow freely. 
                Join us to transform thoughts into action and innovation into reality.`
  };
};
