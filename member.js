function skillsMember() {
    return {
        name: 'skills-member',
        template: `
            <div class="skills-member">
                <div class="skills-member__avatar">
                    <img :src="avatar" alt="Avatar">
                </div>
                <div class="skills-member__info">
                    <h3 class="skills-member__name">{{ name }}</h3>
                    <p class="skills-member__role">{{ role }}</p>
                </div>
            </div>
        `,
        props: {
            name: {
                type: String,
                required: true
            },
            role: {
                type: String,
                required: true
            },
            avatar: {
                type: String,
                required: true
            }
        }
    };
}   