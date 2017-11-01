// Purpose: Apply configuration to the project files

// Import modules
const alert = require('./alert')

// Import jobs
const updateIgnoreFiles = require('./jobs/updateIgnoreFiles')
const updateEditorconfigFile = require('./jobs/updateEditorconfigFile')

// Run jobs
updateEditorconfigFile
  .then(updateIgnoreFiles)
  .then(() => {
    alert('Configuration applied successfully.')
  })
  .catch(() => {
    alert('Failed to apply the configuration.', 'issue')
  })
